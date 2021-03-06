import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-booking-services-modal',
  templateUrl: './booking-services-modal.component.html',
  styleUrls: ['./booking-services-modal.component.css']
})
export class BookingServicesModalComponent implements OnInit {

  @Input() mediServicesName!: string;

  services_name !: string;
  patient_name !: string;
  age !: string;
  address !: string;
  mobile !: string;
  problem !: string;
  time !: string;
  data !: string;

  constructor( private bookingService :BookingService, public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  addBooking(form : NgForm){
    const newBooking : any = {
      
      services_name : this.mediServicesName,
      patient_name : this.patient_name,
      age : this.age,
      address: this.address,
      problem : this.problem,
      time : this.time,
      data : this.data
    }
    this.bookingService.addBooking(newBooking).then(()=>{
      alert('Add successfully');
      form.reset();
      this.activeModal.close();
    })
  }


}
