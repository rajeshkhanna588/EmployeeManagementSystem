import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Inject } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Observable, from } from "rxjs";
export class EmployeeService {
  formdata: UserRole;
  appurl: string = "";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
}
  constructor(private httpobj: HttpClient, @Inject('BASE_URL') _baseurl: string) {
    this.appurl =  _baseurl;
  }


  LoginPage(formdata: UserRole): Observable<UserRole> {
    return this.httpobj.post<UserRole>(this.appurl + "api/User/LoginPage/", formdata).pipe()
  }
  getAllEmployees(): Observable<EmployeeModel> {
    return this.httpobj.get<EmployeeModel>(this.appurl + "api/User/GetEmployees");
  }
  getByIdEmployee(id: string): Observable<EmployeeModel> {
    return this.httpobj.get<EmployeeModel>(this.appurl + "api/User/getByIdEmployee/"+id);
  }
  AddEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.httpobj.post<EmployeeModel>(this.appurl + "api/User/NewEmployee", employee).pipe()
  }
  UpdateEmployee(employee: EmployeeModel): Observable<string> {
    return this.httpobj.post<string>(this.appurl + "api/User/UpdateEmployee", employee).pipe()
  }
  deleteByIdEmployee(id: string): Observable<string> {
    return this.httpobj.delete<string>(this.appurl + "api/User/DeleteEmployee/" + id).pipe()
  }
}


export class EmployeeModel {
  Id: number;
  Name: string;
  PhoneNo: string;
  Email: string;
  Country: string;
  State: string;
  District: string;
}

export class UserRole {
  Id: number;
  UserName: string;
  Password: string;
}
