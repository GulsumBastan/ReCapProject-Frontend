import { Injectable } from '@angular/core';
import { CustomerDeatailDto } from '../models/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:7081/api/customers/"

  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<CustomerDeatailDto>>{
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<CustomerDeatailDto>>(newPath);
}
}

