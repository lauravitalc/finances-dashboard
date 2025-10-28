using Finances.Models;
using Microsoft.EntityFrameworkCore;

namespace Finances.Data
{
    public class FinancesDbContext : DbContext
    {
        public FinancesDbContext(DbContextOptions<FinancesDbContext> options) : base(options)
        {
        }

        public DbSet<Transaction> Transactions => Set<Transaction>();
    }
}