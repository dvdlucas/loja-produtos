import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 
import { ProdutoService } from '../../services/produto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) {}

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
    this.produtoService.excluir(id).subscribe(() => {
      this.atualizarLista();
    });
  }
}
