import {Component, OnInit} from '@angular/core';
import {CarServiceService} from "../services/car-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent implements OnInit {

  cars:any;
  constructor(private carService:CarServiceService,) { }

  ngOnInit(): void {
 this.getAllCar();
  }

  getAllCar(){
    this.carService.getAllCar().subscribe((res)=>{
      this.cars=res;
    })
  }
  deleteCar(idCar: any) {
    console.log(typeof idCar);
    this.carService.deleteCar(idCar).subscribe(()=>{
      this.cars = this.cars.filter(
  (car)=>
        car.idCar!==idCar
      )
    });
  }
}
