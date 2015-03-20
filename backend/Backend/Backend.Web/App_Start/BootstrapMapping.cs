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
            Mapper.CreateMap<ProductType, ProductTypeModel>();
            var prodToProdModel = Mapper.CreateMap<Product, ProductModel>();
            prodToProdModel.ForMember(d => d.ProductType, o => o.Ignore());
            prodToProdModel.AfterMap((s, d) => 
            { 
                if(s.ProductType != null)
                {
                    d.ProductType = new ProductTypeModel { Id = s.ProductType.Id, Name = s.ProductType.Name }; 
                }
            });
                    

            Mapper.CreateMap<ProductModel, Product>();
            Mapper.CreateMap<Customer, CustomerModel>();
            Mapper.CreateMap<CustomerModel, Customer>();
        }
    }
}