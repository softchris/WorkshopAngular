﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain
{
    public class Product: BaseModel
    {
        public string Name { get; set; }
        public ProductType ProductType { get; set;  }
        public int ProductTypeId { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
