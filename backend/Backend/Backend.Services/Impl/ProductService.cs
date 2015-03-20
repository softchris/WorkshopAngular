using Backend.Data;
using Backend.Domain;
using Backend.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services.Impl
{
    public class ProductService : Service<Product>, IProductService
    {
        WorkshopContext _context;

        public ProductService()
        {
            _context = new WorkshopContext();
        }

        public IEnumerable<Product> GetEagerProducts()
        {
            return _context.Products.Include("ProductType").ToList();

            //using (var DB = new WorkshopContext()) 
            //{
            //    return DB.Products.Include("ProductType").ToList();
            //}
        }
    }
}
