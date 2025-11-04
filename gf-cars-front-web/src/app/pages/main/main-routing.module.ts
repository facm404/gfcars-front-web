import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { MainHomeComponent } from './home/main-home/main-home.component';


const routes: Routes = [
  { path: 'home', component: MainHomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeModule
  ],
  exports: [RouterModule],
})
export class MainRoutingModule { }