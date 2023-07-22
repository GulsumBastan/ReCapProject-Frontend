import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarAddComponent } from './components/carComponents/car-add/car-add.component';
import { CarDetailComponent } from './components/carComponents/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/carComponents/car-update/car-update.component';
import { CarFilterComponent } from './components/carComponents/car-filter/car-filter.component';
import { BrandAddComponent } from './components/brandComponents/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brandComponents/brand-update/brand-update.component';
import { ColorAddComponent } from './components/colorComponents/color-add/color-add.component';
import { ColorUpdateComponent } from './components/colorComponents/color-update/color-update.component';
import { AuthMenuComponent } from './components/naviComponets/auth-menu/auth-menu.component';
import { MyRentalsComponent } from './components/rentalComponents/my-rentals/my-rentals.component';
import { PaymentComponent } from './components/rentalComponents/payment/payment.component';
import { RentalListComponent } from './components/rentalComponents/rental-list/rental-list.component';
import { LoginComponent } from './components/authComponents/login/login.component';
import { RegisterComponent } from './components/authComponents/register/register.component';
import { PasswordUpdateComponent } from './components/authComponents/password-update/password-update.component';
import { ProfileUpdateComponent } from './components/authComponents/profile-update/profile-update.component';
import { NaviComponent } from './components/naviComponets/navi/navi.component';
import { CarComponent } from './components/carComponents/car/car.component';
import { BrandComponent } from './components/brandComponents/brand/brand.component';
import { ColorComponent } from './components/colorComponents/color/color.component';
import { RentalComponent } from './components/rentalComponents/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent,
    CarDetailComponent,
    CarUpdateComponent,
    CarFilterComponent,
    BrandComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    ColorComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    NaviComponent,
    AuthMenuComponent,
    MyRentalsComponent,
    PaymentComponent,
    RentalListComponent,
    RentalComponent,
    LoginComponent,
    RegisterComponent,
    PasswordUpdateComponent,
    ProfileUpdateComponent,
    NaviComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
