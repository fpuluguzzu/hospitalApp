import { Injectable } from '@angular/core';
import { Idoctor } from '../interfaces/idoctor';
import { doctordata } from '../Data';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors:Idoctor[] = [
    {name: "Peter", specialization: "Oncology"},
    {name: "John", specialization: "Dentistry"},
    {name: "Smith", specialization:"Family Medicine"},
  ];

  constructor() { }
}
