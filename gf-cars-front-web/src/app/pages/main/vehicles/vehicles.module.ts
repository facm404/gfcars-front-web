import { NgModule } from "@angular/core";
import { AllVehiclesComponent } from "./vehicles-main/all-vehicles/all-vehicles.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DetailVehiclesComponent } from "./vehicles-main/detail-vehicles/detail-vehicles.component";
import { VehiclesMainComponent } from "./vehicles-main/vehicles-main.component";

@NgModule({
    declarations: [
        VehiclesMainComponent,
        AllVehiclesComponent,
        DetailVehiclesComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        
    ]
})
export class VehiclesModule { }