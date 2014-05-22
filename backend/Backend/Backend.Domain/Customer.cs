using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain
{
    public class Customer : BaseModel
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string BillingAddress { get; set; }
        public bool IsPremium { get; set; }
        public DateTime ? LastLoggedIn { get; set; }
    }
}
