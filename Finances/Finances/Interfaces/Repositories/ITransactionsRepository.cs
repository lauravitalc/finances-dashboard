using Finances.Models;

namespace Finances.Interfaces.Repositories
{
    public interface ITransactionsRepository
    {
        Transaction? GetById(Guid id);
        List<Transaction> GetAll();
        void CreateTransaction(Transaction transaction);
        void UpdateTransaction(Transaction transaction);
        void DeleteTransaction(Guid id);
    }
}
