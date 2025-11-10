import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { VehiclesMainComponent } from './vehicles/vehicles-main/vehicles-main.component';
import { AllVehiclesComponent } from './vehicles/vehicles-main/all-vehicles/all-vehicles.component';
import { DetailVehiclesComponent } from './vehicles/vehicles-main/detail-vehicles/detail-vehicles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'home', component: MainHomeComponent },
  {
    path: 'vehicles', component: VehiclesMainComponent,
    children: [
      { path: 'all', component: AllVehiclesComponent },
      { path: 'detail/:id', component: DetailVehiclesComponent },
      { path: '**', redirectTo: 'all' },

    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeModule,
    VehiclesModule
  ],
  exports: [RouterModule],
})
export class MainRoutingModule { }