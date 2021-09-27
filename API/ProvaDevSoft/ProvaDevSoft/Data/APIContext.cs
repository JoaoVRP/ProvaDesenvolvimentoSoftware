using Microsoft.EntityFrameworkCore;
using ProvaDevSoft.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProvaDevSoft.Data
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options)
          : base(options)
        { }
        public DbSet<PessoaModel> Pessoas { get; set; }
    }
}
