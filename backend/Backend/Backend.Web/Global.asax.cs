using Backend.Web.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Data.Entity;
using Backend.Data.Data;

namespace Backend.Web
{
    public class WebApiApplication : System.Web.HttpApplication
    {

        protected void Application_Start()
        {
            BootstrapMapping.Execute();
            Database.SetInitializer(new Initializer());

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        public void Application_BeginRequest(object sender, EventArgs e)
        {
            if (Request.HttpMethod == "OPTIONS") 
            {
                Response.Flush();
                Response.End();
            }
        }
    }
}
