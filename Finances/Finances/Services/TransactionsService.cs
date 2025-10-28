using Finances.Models;
using Finances.Repositories;

namespace Finances.Services
{
    public class TransactionsService
    {
        private readonly TransactionsRepository _repository;

        public TransactionsService(TransactionsRepository repository)
        {
            _repository = repository;
        }

        public async void CreateAsync(Transaction transaction) { 
            await _repository.CreateAsync(transaction);
        }
    }
}
