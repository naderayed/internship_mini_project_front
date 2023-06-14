import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarServiceService} from "../../services/car-service.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carForm!: FormGroup;
  model: FormControl;
  color: FormControl;
  horsePower: FormControl;
  yearOfManufacture !: FormControl;

  constructor(private carService: CarServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
    this.createForm();
  }

  initForm() {
    this.model = new FormControl('', [Validators.required]);
    this.color = new FormControl('', [Validators.required]);
    this.horsePower = new FormControl('', [Validators.required]);
    this.yearOfManufacture = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.carForm = new FormGroup({
      model: this.model,
      color: this.color,
      horsePower: this.horsePower,
      yearOfManufacture: this.yearOfManufacture,
    });
  }

  onSubmit() {
    this.addCar(this.carForm.value);

  }

  addCar(carBody: Object) {
    console.log(carBody)
    this.carService.addCar(carBody).subscribe((res)=>{
      console.log("added");
      this.router.navigate(['/']).then();
    })

  }
}
