import { Component, OnInit } from '@angular/core';
import { EmployeeModel, EmployeeService } from '../../Services/EmployeeService';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public empList: EmployeeModel;

  constructor(private empservice: EmployeeService)
  { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.empservice.getAllEmployees().subscribe(data => this.empList = data);
  }
}
