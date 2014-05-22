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
            context.Products.Add(new Product { Name = "test" });

            context.Customers.Add(new Customer { BillingAddress = "Torpgatan 2 111 12 Malung", Firstname = "Nils", Lastname = "Persson", IsPremium = false, LastLoggedIn = DateTime.Now });

            base.Seed(context);
        }
    }
}
