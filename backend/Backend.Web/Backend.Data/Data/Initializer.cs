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
            base.Seed(context);
        }
    }
}
