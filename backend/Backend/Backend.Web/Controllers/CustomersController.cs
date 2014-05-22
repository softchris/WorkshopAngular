using AutoMapper;
using Backend.Services.Contracts;
using Backend.Services.Impl;
using Backend.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend.Web.Controllers
{
    public class CustomersController : ApiController
    {
        ICustomerService _customerService = new CustomerService();

        public IEnumerable<CustomerModel> Get() 
        {
            return _customerService.Get().Select(cust => Mapper.Map<CustomerModel>(cust));
        }
    }
}
