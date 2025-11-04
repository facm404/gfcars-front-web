import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './pages/main/home/main-home/main-home.component';

const routes: Routes = [
  {
  path: 'home',component: MainHomeComponent
}
,
{
  path: '',
  loadChildren: () => import('./pages/main/main-routing.module').then(m => m.MainRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
