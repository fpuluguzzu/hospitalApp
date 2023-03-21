import { Component } from '@angular/core';
import { Idoctor } from './interfaces/idoctor';
import { Ipatient } from './interfaces/ipatient';
import { DoctorService } from './services/doctor.service';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  doctors:Idoctor[];
  patients:Ipatient[];

  constructor(private doctorSrvice: DoctorService, private patientService:PatientService){
    this.doctors = doctorSrvice.doctors;
    this.patients = patientService.patients;

  }
}
