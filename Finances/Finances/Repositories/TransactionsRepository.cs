using Finances.Data;
using Finances.Models;
using Microsoft.EntityFrameworkCore;

namespace Finances.Repositories
{
    public class TransactionsRepository
    {
        private readonly FinancesDbContext _context;
        public TransactionsRepository(FinancesDbContext context)
        {
            _context = context;
        }

        public async Task<List<Transaction>> GetAllAsync(CancellationToken ct = default)
        {
            return await _context.Transactions
               .AsNoTracking()
               .Include(t => t.Category)
               .Include(t => t.Tags)
               .OrderByDescending(t => t.Date)
               .ToListAsync(ct);
        }

        public async Task<Transaction> CreateAsync(Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return transaction;
        }
    }
}
