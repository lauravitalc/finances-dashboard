using Finances.Models;

namespace Finances.Interfaces.Services
{
    public interface ITransactionsService
    {
        Task CreateAsync(Transaction transaction);
    }
}
