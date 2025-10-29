using Finances.Models;

namespace Finances.Interfaces.Repositories
{
    public interface ITransactionsRepository
    {
        Transaction? GetById(Guid id);
        List<Transaction> GetAllAsync();
        Task CreateTransaction(Transaction transaction);
        void UpdateTransaction(Transaction transaction);
        void DeleteTransaction(Guid id);
    }
}
