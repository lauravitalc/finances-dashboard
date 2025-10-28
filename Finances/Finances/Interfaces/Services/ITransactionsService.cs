using Finances.Models;

namespace Finances.Interfaces.Services
{
    public interface ITransactionsService
    {
        void CreateAsync(Transaction transaction);
    }
}
