using AutoMapper;
using Backend.Domain;
using Backend.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Web.App_Start
{
    public class BootstrapMapping
    {
        public static void Execute() 
        {
            Mapper.CreateMap<Product, ProductModel>();
            Mapper.CreateMap<ProductModel, Product>();

            Mapper.CreateMap<Customer, CustomerModel>();
            Mapper.CreateMap<CustomerModel, Customer>();
        }
    }
}