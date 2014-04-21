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
    }
}
