import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'produtos', loadComponent: () => import('./pages/produtos/produtos.component').then(m => m.ProdutosComponent) },
      { path: 'cadastrar', loadComponent: () => import('./pages/cadastro-produto/cadastro-produto.component').then(m => m.CadastroProdutoComponent) },
      { path: 'produtos/editar/:id', loadComponent: () => import('./pages/editar/editar.component').then(m => m.EditarComponent) },
      { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    ]
  }
];
