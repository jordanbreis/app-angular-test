import { Route } from '@angular/router';
import { Teste1Component } from './teste1/teste1.component';
import { NavComponent } from './nav/nav.component';
import { Teste2Component } from './teste2/teste2.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NavComponent,
  },
  { path: 'teste1', component: Teste1Component },
  { path: 'teste2', component: Teste2Component },
];
