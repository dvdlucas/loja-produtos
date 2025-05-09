import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  standalone: true,
  imports: [],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.scss'
})
export class EditarProdutoComponent implements OnInit {
  form: FormGroup;
  produtoId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
    this.produtoId = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.buscarPorId(this.produtoId).subscribe(produto => {
      this.form.patchValue(produto);
    });
  }

  editar(): void {
    if (this.form.invalid) return;

    this.produtoService.editar(this.produtoId, this.form.value).subscribe(() => {
      alert('Produto atualizado com sucesso!');
      this.router.navigate(['/produtos']);
    }, error => {
      alert('Erro ao atualizar produto: ' + error.message);
    });
  }
}
