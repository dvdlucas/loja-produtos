import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/novo', component: CadastroProdutoComponent },
];
