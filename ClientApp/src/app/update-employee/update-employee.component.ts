import { Component, OnInit } from '@angular/core';
import { EmployeeModel, EmployeeService } from '../../Services/EmployeeService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  public empList: EmployeeModel;
  constructor(private empServices: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var id = params.get('Id');
      this.empServices.getByIdEmployee(id).subscribe(res => {
        this.empList = res;
      })   
    });
  }
  UpdateEmployee(empList: EmployeeModel) {
    this.empServices.UpdateEmployee(empList).subscribe(res => {
      if (res == "1") {
        alert("employee updated successfully")
      }
    });
  }
}
