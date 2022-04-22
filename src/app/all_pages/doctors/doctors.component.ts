import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idoctor } from 'src/app/idoctor';
import { DoctorsService } from 'src/app/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors:any;

  constructor(public http:HttpClient,private doctorsService : DoctorsService) { }

  ngOnInit(): void {
    // this.getDoctors();

    this.doctorsService.GetAllDoctors().subscribe((data:any) => {
      this.doctors=data;
      

    });
  }
//   getDoctors() : void{
//     this.http.get('http://localhost:5000/doctors').subscribe(data => {
//       this.doctors = data;
//       console.log(this.doctors);

//     });

//   }
//
}
