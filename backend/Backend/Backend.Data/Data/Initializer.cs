using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Backend.Domain;

namespace Backend.Data.Data
{
    public class Initializer: DropCreateDatabaseAlways<WorkshopContext>
    {
        protected override void Seed(WorkshopContext context)
        {
            context.Products.Add(new Product { Name = "Elvis Presley - Greatest Hits", ProductType = new ProductType { Name ="Music" } });

            var cust = new Customer { BillingAddress = "Torpgatan 2 111 12 Malung", Firstname = "Nils", Lastname = "Persson", IsPremium = false, LastLoggedIn = DateTime.Now };

            context.Customers.Add(cust);
            context.Orders.Add(new Order { Created = DateTime.Now, Customer = cust });

            context.SaveChanges();

            base.Seed(context);
        }
    }
}
