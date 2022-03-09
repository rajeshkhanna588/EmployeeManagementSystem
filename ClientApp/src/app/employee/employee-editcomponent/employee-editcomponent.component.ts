import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../Services/EmployeeService';

@Component({
  selector: 'app-employee-editcomponent',
  templateUrl: './employee-editcomponent.component.html',
  styleUrls: ['./employee-editcomponent.component.css']
})
export class EmployeeEditcomponentComponent implements OnInit {
  employeeAddForm: FormGroup;
  ngOnInit() {
    this.employeeAddForm = this.fb.group({
      name:[''],
      phoneNo:[''],
      email:[''],
      country:[''],
      state:[''],
      district: ['']
    })
  }
  constructor(public fb: FormBuilder, private router: Router, public crudServices: EmployeeService) { }
  submitForm() {
    this.crudServices.AddEmployee(this.employeeAddForm.value).subscribe(res => {
      console.log("Employee add successfully");
    })
    this.crudServices.UpdateEmployee(this.employeeAddForm.value).subscribe(res => {
      console.log("Employee add successfully");
    })
    //this.crudServices.DeleteEmployee(this.employeeAddForm.value).subscribe(res => {
    //  console.log("Employee add successfully");
    //})
  }

}
