import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';


@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl="https://localhost:7081/api/"
  constructor(private httpClient:HttpClient) { }
  getCarimagesByCarId(carId:Number):Observable<ListResponseModel<CarImage>>
  { let newPath=this.apiUrl+"carimages/getall?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarDetailsByCarId(carId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}
