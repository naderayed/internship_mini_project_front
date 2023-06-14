import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCarComponent} from "./car-management/add-car/add-car.component";
import {CarManagementComponent} from "./car-management/car-management.component";

const routes: Routes = [
  { path: 'addCar',  component: AddCarComponent },
  { path: '**', component: CarManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
