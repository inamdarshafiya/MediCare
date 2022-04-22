import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Iappointment } from '../iappointment';
import { ViewAppointmentsService } from '../view-appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointement:any;

  constructor(private router: Router,public http:HttpClient,private viewappointment: ViewAppointmentsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.viewappointment.GetAllAppointments().subscribe((data:any) => {

      this.appointement=data;


    });
  }
  deleteAppointment(id:any){debugger;
    this.viewappointment.removeCartItem(id);

  }

  // updateAppointment(data:any){
  //   this.router.navigate(['book'], { queryParams: data,skipLocationChange: true}
  //   )

  // };


}
