import { NgModule } from "@angular/core";
import { AllVehiclesComponent } from "./vehicles-main/all-vehicles/all-vehicles.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DetailVehiclesComponent } from "./vehicles-main/detail-vehicles/detail-vehicles.component";
import { VehiclesMainComponent } from "./vehicles-main/vehicles-main.component";
import { FilterVehicleComponent } from './vehicles-main/all-vehicles/filter-vehicle/filter-vehicle.component';

@NgModule({
    declarations: [
        VehiclesMainComponent,
        AllVehiclesComponent,
        DetailVehiclesComponent,
        FilterVehicleComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        VehiclesMainComponent,
    ]
})
export class VehiclesModule { }