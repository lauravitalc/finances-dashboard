using Finances.Data;
using Finances.Interfaces.Repositories;
using Finances.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Finances.Repositories
{
    public class TransactionsRepository : ITransactionsRepository
    {
        private readonly FinancesDbContext _context;
        public TransactionsRepository(FinancesDbContext context)
        {
            _context = context;
        }

        public Transaction? GetById(Guid id)
        {
            return _context.Transactions
               .AsNoTracking()
               .Include(t => t.Category)
               .Include(t => t.Tags)
               .FirstOrDefault(t => t.Id == id);
        }

        public List<Transaction> GetAllAsync()
        {
            return _context.Transactions
               .AsNoTracking()
               .Include(t => t.Category)
               .Include(t => t.Tags)
               .OrderByDescending(t => t.Date)
               .ToList();
        }

        public async Task CreateTransaction(Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
        }

        public void UpdateTransaction(Transaction transaction)
        {
            _context.Transactions.Update(transaction);
            _context.SaveChanges();
        }

        public void DeleteTransaction(Guid id)
        {
            var entity = _context.Transactions.Find(id);
            if (entity is null) return;

            _context.Transactions.Remove(entity);
            _context.SaveChanges();
        }

        public async Task<Transaction> CreateAsync([FromBody] Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return transaction;
        }
    }
}
