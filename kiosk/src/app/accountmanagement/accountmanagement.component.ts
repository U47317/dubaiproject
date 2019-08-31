import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accountmanagement',
  templateUrl: './accountmanagement.component.html',
  styleUrls: ['./accountmanagement.component.css']
})
export class AccountmanagementComponent implements OnInit {
public message = "accountManagement"
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeMessage(this.message)
  }

}
