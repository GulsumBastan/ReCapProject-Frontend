import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { CarDetailsDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';

// import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
// import { CustomerFindeksScoreService } from 'src/app/services/customer-findeks-score.service';
// import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages:CarImage[]=[];
  carDetails:CarDetailsDto[]=[];
  apiUrl:string="https://localhost:7081/Uploads/Images/";

  dataLoaded=false;
  constructor(private carimageService:CarimageService,
    private activatedRoute:ActivatedRoute,
    private carService:CarService,private router: Router
    // private customerfindeksscore:CustomerFindeksScoreService,
    // private localStorageService:LocalStorageService,private toastrService:ToastrService,
    ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"])
      {
         //this.getCarImagesByCarId(params["carId"]),
         this.getCarDetailsByCarId(params["carId"])
      }
    })
  }
  getCarImagesByCarId(carId:Number){
    this.carimageService.getCarimagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
      this.dataLoaded=true;

    });

}
getCarDetailsByCarId(carId:Number){
  this.carimageService.getCarDetailsByCarId(carId).subscribe(response=>{
    this.carDetails=response.data;
    this.dataLoaded=true;
  });}
  getSliderClassName(index:number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }


}
