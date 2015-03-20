using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain
{
    public class Order : BaseModel
    {
        public DateTime Created { get; set; }
        public ICollection<Product> Items { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
