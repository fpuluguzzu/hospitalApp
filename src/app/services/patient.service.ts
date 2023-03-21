import { Injectable } from '@angular/core';
import { Ipatient } from '../interfaces/ipatient';
import { patientdata } from '../Data';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients:Ipatient[] = patientdata;
    
  

  constructor() { }
}
