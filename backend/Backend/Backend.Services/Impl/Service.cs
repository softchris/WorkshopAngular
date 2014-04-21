using Backend.Data;
using Backend.Domain;
using Backend.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services.Impl
{
    public class Service<T>: IService<T> where T:BaseModel
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
                return DB.Set<T>().ToList();
            }
        }

        public T Get(int id)
        {
            using (var DB = new WorkshopContext()) 
            {
                return DB.Set<T>().SingleOrDefault( t => t.Id == id );
            }
        }
    }
}
