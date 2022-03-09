using EmployeeManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.DataAccessLayer
{

    public class DAEmployees
    {
        CompanyDataContext context = new CompanyDataContext();
        public IEnumerable<EmployeeDetails> GetAll()
        {
            try
            {
                var data = context.EmployeeDetails.ToList();
                return data;
            }
            catch
            {
                throw;
            }
        }
        public bool CreateEmployee(EmployeeDetails empData)
        {
            bool response = false;
            try
            {
                EmployeeDetails newEmployee = new EmployeeDetails();
                newEmployee.Name = empData.Name;
                newEmployee.PhoneNo = empData.PhoneNo;
                newEmployee.Email = empData.Email;
                newEmployee.Country = empData.Country;
                newEmployee.State = empData.State;
                newEmployee.District = empData.District;
                context.EmployeeDetails.Add(newEmployee);
                context.SaveChanges();
                response=true;
            }
            catch
            {
                throw;
            }
          return response;
        }
    }
}
