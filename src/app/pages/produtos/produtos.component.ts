import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 
import { ProdutoService } from '../../services/produto.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe(data => {
      this.produtos = data;
    });
  }
    atualizarLista() {
    this.produtoService.listar().subscribe(( data ) => {
      this.produtos = data;
    });
  }

  excluirProduto(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.excluir(id).subscribe(() => {
        alert('Produto excluído com sucesso!');
        this.atualizarLista();
      }, error => {
        alert('Erro ao excluir produto: ' + error.message);
      });
    }
  }

  editarProduto(id: number) {
    this.router.navigate(['/produtos/editar', id]);
  }
}
