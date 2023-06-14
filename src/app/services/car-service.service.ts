import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  constructor(private http:HttpClient) {
  }

  getCar(id:any):Observable<any>{
    return  this.http.get(`${env.apiRoot}getCar?idCar=`+id);
  }
  getAllCar():Observable<any>{
    return this.http.get(`${env.apiRoot}getAllCar`);
  }
  addCar(car:any):Observable<any>{
  return   this.http.post(`${env.apiRoot}addCar`,car);
  }

  deleteCar(idCar: any):Observable<any> {
   return  this.http.delete(`${env.apiRoot}deleteCar?idCar=`+idCar)
  }
}
