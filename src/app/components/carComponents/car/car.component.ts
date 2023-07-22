import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carImages:CarImage[]=[];
  carsDetails:CarDetailsDto[]=[];
  dataLoaded=false;
  fltrBrand="";
  fltrColor="";
  apiUrl:string="https://localhost:7081";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private brandService:BrandService,private colorService:ColorService,private carimageService:CarimageService,private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      if (params["brandId"]&& params["colorId"]) {
        this.getCarByBrandAndColor(params["brandId"],params["colorId"])
        console.log("çalıştı");
      }
      else if(params["brandId"])
      {
         this.getCarByBrand(params["brandId"])
         console.log(" brand çalıştı")
      }
       else if (params["colorId"]) {
        this.getCarByColor(params["colorId"])
      }
      else
      {
        this.getCarsDetails();

      }

    })
  }

  getCarsDetails(){
    this.carService.getCarsDetails().subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
      console.log(this.dataLoaded)
    });

  }
  getCarByBrand(brandId:Number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
    });
     }
     getCarByColor(colorId:Number){
      this.carService.getCarsByColor(colorId).subscribe(response=>{
        this.carsDetails=response.data
        this.dataLoaded=true;
      });
       }
       getCarByBrandAndColor(brandId:Number,colorId:Number)
       {
         this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response=>{
           this.carsDetails=response.data
           this.dataLoaded=true;
         });
       }
       goToCarDetailsCarId(carId:Number){
        this.router.navigate(["cars/car-detail",carId]);
      }

}
