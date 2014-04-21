using Backend.Data.Data;
using Backend.Services.Impl;
using System.Data.Entity;

namespace Backend.Services
{
    public class Class1
    {
        public static void Main(string[] args)
        {
            Database.SetInitializer(new Initializer());
            ProductService srv = new ProductService();
            var products = srv.Get();
        }
    }
}