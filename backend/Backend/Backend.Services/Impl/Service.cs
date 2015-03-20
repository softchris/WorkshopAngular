using Backend.Data;
using Backend.Domain;
using Backend.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services.Impl
{
    public class Service<T>: IService<T> where T:BaseModel, new()
    {
        public T Create(T entity)
        {
            using (var DB = new WorkshopContext())
            {
                DB.Set<T>().Add(entity);
                DB.SaveChanges();
            }

            return entity;
        }

        public void Update(T entity)
        {
            using (var DB = new WorkshopContext())
            {
                DB.Entry<T>(entity).State = System.Data.Entity.EntityState.Modified;
                DB.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            using (var DB = new WorkshopContext())
            {
                var entity = DB.Set<T>().SingleOrDefault(t => t.Id == id);
                DB.Entry<T>(entity).State = System.Data.Entity.EntityState.Deleted;
                DB.SaveChanges();
            }
        }

        public IEnumerable<T> Get()
        {
           
            using (var DB = new WorkshopContext())
            {
                return DB.Set<T>();
            }
        }

        public T Get(int id)
        {
            Type myType = (typeof(T));
            PropertyInfo[] myPropertyInfo = myType.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            var properties = myPropertyInfo.Where(p => p.PropertyType.FullName.StartsWith("Backend"));
            
            using (var DB = new WorkshopContext()) 
            {
                DbQuery<T> query = DB.Set<T>();
                foreach(var prop in properties)
                {
                    query = query.Include(prop.PropertyType.Name);
                    //prop.PropertyType.Name
                }

                return query.SingleOrDefault( t => t.Id == id );
            }
        }
    }
}
