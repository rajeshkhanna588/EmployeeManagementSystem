import { Component, OnInit } from '@angular/core';
import { UserRole, EmployeeService } from '../../Services/EmployeeService';
import { NgForm } from '@angular/forms';
import { NgAnalyzedFile } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userRole =new UserRole();
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    //this.EmployeeLogin();
  }
  EmployeeLogin(form: NgForm) {
    console.log(form.value);
    this.userRole.UserName = form.value.userName;
    this.userRole.Password = form.value.password;
    this.empService.LoginPage(this.userRole);
  }
}
