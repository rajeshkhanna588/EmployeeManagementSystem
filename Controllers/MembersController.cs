using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagementSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.Models;
using Services.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeeManagementSystem.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly IJwtAuthentication jwtAuth;
        private readonly List<Member> members = new List<Member>()
        {
            new Member{Id=1,Name="Pravesh"},
            new Member{Id=2,Name="Sumit"},
            new Member{Id=3,Name="Vishal"}
        };

        public MembersController(IJwtAuthentication jwtAuthentication)
        {
            jwtAuth = jwtAuthentication;
        }
        // GET: api/<MembersController>
        [HttpGet]
        public IEnumerable<Member> Get()
        {
            return members;
        }

        // GET api/<MembersController>/5
        [HttpGet("{id}")]
        public Member EmployeeGetBy(int id)
        {
            return members.Find(x => x.Id == id);
        }


        [AllowAnonymous]
        // POST api/<MembersController>
        [HttpPost("Authentication")]
        public IActionResult Authentication([FromBody] UserCredential userCredential)
        {
            var token = jwtAuth.Authentication(userCredential.UserName, userCredential.Password);
            if (token == null)
                return Unauthorized();
            return Ok(token);
        }

        // PUT api/<MembersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MembersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
