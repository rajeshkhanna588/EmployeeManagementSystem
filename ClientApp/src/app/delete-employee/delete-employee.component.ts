import { Component, OnInit } from '@angular/core';
import { EmployeeService, EmployeeModel } from '../../Services/EmployeeService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
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
  DeleteEmployee(id: string) {
    this.empServices.deleteByIdEmployee(id).subscribe(res => {
      if (res == "1") {
        alert("employee delete successfully")
      }
    });
  }
}
