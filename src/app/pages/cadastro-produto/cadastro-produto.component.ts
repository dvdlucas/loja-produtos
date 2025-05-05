import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  salvar() {
    if (this.form.invalid) return;

    this.produtoService.cadastrar(this.form.value).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.form.reset();
    });
  }
}
