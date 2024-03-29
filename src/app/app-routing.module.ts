import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/carComponents/car/car.component';
import { CarDetailComponent } from './components/carComponents/car-detail/car-detail.component';
import { RentalComponent } from './components/rentalComponents/rental/rental.component';
import { RentalListComponent } from './components/rentalComponents/rental-list/rental-list.component';
import { PaymentComponent } from './components/rentalComponents/payment/payment.component';
import { BrandAddComponent } from './components/brandComponents/brand-add/brand-add.component';
import { ColorAddComponent } from './components/colorComponents/color-add/color-add.component';
import { CarAddComponent } from './components/carComponents/car-add/car-add.component';
import { CarUpdateComponent } from './components/carComponents/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brandComponents/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/colorComponents/color-update/color-update.component';
import { CustomerComponent } from './components/customerComponents/customer.component';
import { RegisterComponent } from './components/authComponents/register/register.component';
import { LoginComponent } from './components/authComponents/login/login.component';
import { ProfileUpdateComponent } from './components/authComponents/profile-update/profile-update.component';
import { PasswordUpdateComponent } from './components/authComponents/password-update/password-update.component';
import { MyRentalsComponent } from './components/rentalComponents/my-rentals/my-rentals.component';


const routes: Routes = [

  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/car-detail/:carId",component:CarDetailComponent},
  {path:"cars/:brandId/:colorId",component:CarComponent},
  // {path:"rentals/:carId/:dailyPrice",component:RentalComponent, canActivate:[AuthGuard]},
  {path:"rentals-list",component:RentalListComponent},
  {path:"payment/:dailyPrice/:rentDate/:returnDate",component:PaymentComponent},
  {path:"brand-add",component:BrandAddComponent},
  {path:"color-add",component:ColorAddComponent},
  {path:"car-add",component:CarAddComponent},
  {path:"car-update/:Id",component:CarUpdateComponent},
  {path:"brand-update/:brandId",component:BrandUpdateComponent},
  {path:"color-update/:colorId",component:ColorUpdateComponent},
  {path:"customers",component:CustomerComponent},
  {path:"register",component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"profile-update", component:ProfileUpdateComponent},
  {path:"password-update", component:PasswordUpdateComponent},
  {path:"my-rentals", component:MyRentalsComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
