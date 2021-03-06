import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  display : any;

  constructor() { }

  ngOnInit(): void {
  }

  addDoctor(){
    this.display ="doctor"
  }

  addMedi(){
    this.display = "medi"
  }

  sendReview(){
    this.display = "review"
  }

  doctorList(){
    this.display = "doctorList"
  }

  mediServicesList(){
    this.display = "mediServicesList"
  }

  orderList(){
    this.display ="orderList"
  }

  appointmentList(){
    this.display = "appointmentList"
  }

}
