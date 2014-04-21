using AutoMapper;
using Backend.Domain;
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
    public class ProductsController : ApiController
    {
        IProductService _service = new ProductService();

        public IEnumerable<ProductModel> Get() 
        {
            return _service.Get().Select( p=> Mapper.Map<ProductModel>(p) );
        }

        public ProductModel Get(int id)
        {
            return Mapper.Map<ProductModel>( _service.Get(id));
        }

        [HttpPost]
        public ProductModel Post(ProductModel entity) 
        {
            return Mapper.Map<ProductModel>(_service.Create(Mapper.Map<Product>(entity)));
        }

        public void Put(ProductModel entity) 
        {
            _service.Update(Mapper.Map<Product>(entity));
        }

        public void Delete(int id) 
        {
            _service.Delete(id);
        }
    }
}
