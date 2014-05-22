using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Web.Models
{
    public class CustomerModel
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string BillingAddress { get; set; }
        public bool IsPremium { get; set; }
        public DateTime? LastLoggedIn { get; set; }
    }
}