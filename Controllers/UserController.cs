using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Models;
using Services.Interface;

namespace EmployeeManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IEmployeeRepository empRepo;
        public UserController(IEmployeeRepository _empRepo)
        {
            empRepo = _empRepo;
        }
        [HttpGet]
        public async Task<object> GetEmplo()
        {
            await Task.Delay(5000);
            object status = "success";
            return Ok(status);
        }

        [HttpPost]
        [Route("LoginPage")]
        public bool LoginPage(UserRoleModel userRole)
        {
            var data=empRepo.GetAllUserRoll(userRole);
            if (data != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet]
        [Route("Index1")]
        public IEnumerable<EmployeeDetails> GetAll()
        {
            return empRepo.GetAll();
        }
        [HttpPost]
        [Route("Index")]
        public bool NewEmployee([FromBody] EmployeeDetails empData)
        {
            return empRepo.CreateEmployee(empData);
        }

        // ***************************************  API Calling ***************************************

        [HttpGet]
        [Route("GetEmployees")]
        //[Route("api/User/GetEmployees")]
        public IEnumerable<EmployeeDetails> GetEmployees()
        {
            return empRepo.GetEmployees();
        }

        [HttpPost]
        [Route("AddEmployee")]
       // [Route("api/Employee/AddEmployee")]
        public IActionResult AddEmployee(EmployeeDetails employee)
        {
            empRepo.AddEmployee(employee);
            return Ok();
        }

        [HttpPost]
        [Route("UpdateEmployee")]
        //[Route("api/Employee/UpdateEmployee")]
        public IActionResult UpdateEmployee(EmployeeDetails employee)
        {
            empRepo.UpdateEmployee(employee);
            return Content("1");
        }

        [HttpDelete]
        [Route("DeleteEmployee/{id}")]
       // [Route("api/Employee/DeleteEmployee")]
        public IActionResult DeleteEmployee(string id)
        {
            var existingEmployee = empRepo.GetEmployee(Convert.ToInt32(id));
            if (existingEmployee != null)
            {
                empRepo.DeleteEmployee(Convert.ToInt32(existingEmployee.Id));
                return Content("1");
            }
            return NotFound($"Employee Not Found with ID : {existingEmployee.Id}");
        }
        [HttpGet]
        [Route("getByIdEmployee/{Id}")]
        public EmployeeDetails getByIdEmployee(string id)
        {
            EmployeeDetails obj = empRepo.GetEmployee(Convert.ToInt32(id));
            return obj;
        }

    }
}
