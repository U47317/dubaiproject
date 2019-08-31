import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AccountmanagementComponent} from './accountmanagement/accountmanagement.component'
import {RegistercustomerComponent} from './registercustomer/registercustomer.component'
import {SearchcustomerComponent} from './searchcustomer/searchcustomer.component'
import {UpdatecustomerdetailsComponent} from './updatecustomerdetails/updatecustomerdetails.component'
import {CustomerdetailsComponent} from './customerdetails/customerdetails.component'
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { BillPaymentSuccessComponent } from './bill-payment-success/bill-payment-success.component';


const routes: Routes = [ 
  {path: '', component: HomeComponent},
  { path: 'accountmanagement', component:  AccountmanagementComponent},
  {path: 'registercustomer', component:  RegistercustomerComponent},
  {path: "searchcustomer", component: SearchcustomerComponent},
  {path: 'updatecustomerdetails',component: UpdatecustomerdetailsComponent},
  {path: 'customerdetails',component: CustomerdetailsComponent},
  {path: 'billpayment',component: BillpaymentComponent},
  {path: 'billpaymentsuccess',component: BillPaymentSuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
