using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain
{
    public class Basket : BaseModel
    {
        public virtual ICollection<Product> Products { get; set; }
        public Customer Customer { get; set; }
    }
}
