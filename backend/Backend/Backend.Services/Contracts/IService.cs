using Backend.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services.Contracts
{
    public interface IService<T> where T:BaseModel
    {
        T Create(T entity);
        void Update(T entity);
        void Delete(int id);
        IEnumerable<T> Get();
        T Get(int id);
    }
}
