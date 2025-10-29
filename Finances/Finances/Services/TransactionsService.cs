using Finances.Interfaces.Services;
using Finances.Models;
using Finances.Repositories;

namespace Finances.Services
{
    public class TransactionsService : ITransactionsService
    {
        private readonly TransactionsRepository _repository;

        public TransactionsService(TransactionsRepository repository)
        {
            _repository = repository;
        }

        public async Task CreateAsync(Transaction transaction)
        {
            await _repository.CreateAsync(transaction);
        }
    }
}
