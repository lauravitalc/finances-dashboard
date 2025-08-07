using Finances.Data.Context;
using Microsoft.AspNetCore.Mvc;

namespace Finances.Controllers
{
    [ApiController]
    [Route("api/transactions")]
    public class TransactionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TransactionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTransaction([FromBody] Transaction transaction)
        {
           _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
