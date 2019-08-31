import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountmanagementComponent } from './accountmanagement/accountmanagement.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { UpdatecustomerdetailsComponent } from './updatecustomerdetails/updatecustomerdetails.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { BillPaymentSuccessComponent } from './bill-payment-success/bill-payment-success.component';
import { BillPaymentHistoryComponent } from './bill-payment-history/bill-payment-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountmanagementComponent,
    RegistercustomerComponent,
    SearchcustomerComponent,
    UpdatecustomerdetailsComponent,
    CustomerdetailsComponent,
    BillpaymentComponent,
    BillPaymentSuccessComponent,
    BillPaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
