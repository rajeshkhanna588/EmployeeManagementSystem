using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using EmployeeManagementSystem.DataAccessLayer;
using EmployeeManagementSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Services.Interface;
using Services.Repository;

namespace EmployeeManagementSystem.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository empRepo;
        public EmployeeController(IEmployeeRepository _empRepo)
        {
            empRepo = _empRepo;
        }
        [HttpGet]
       // [Route("api/Employee/Index")]
        public IEnumerable<EmployeeDetails> GetAll()
        {
            return empRepo.GetAll();
        }

        [HttpPost]
        public bool NewEmployee([FromBody] EmployeeDetails empData)
        {
            return empRepo.CreateEmployee(empData);
        }

    }
}
