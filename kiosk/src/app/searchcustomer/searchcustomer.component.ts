import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {
  public message = null;
  public componentRouterLink = "";


  constructor(private data: DataService) { 
    this.data.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
    if (this.message == "accountManagement")
    {
      this.componentRouterLink = "/updatecustomerdetails"
    }else if (this.message == "billPayment")
    {
      this.componentRouterLink = "/billpayment"
    }else if (this.message == "queryManagement")
    {
      this.componentRouterLink = "/billPaymentHistory"
    }
  }

  ngOnInit() {
   
  }

}
