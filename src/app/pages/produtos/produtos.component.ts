import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produtos',
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
}
