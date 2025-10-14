using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finances.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetTransactions()
        {
            // Logic to get transactions
            return Ok(new[] { "Transaction1", "Transaction2" });
        }

        [HttpGet]
        public IActionResult GetTransactionById(int id) {
            // Logic to get a specific transaction by id
            return Ok($"Transaction {id}");
        }

        [HttpPost]
        public IActionResult CreateTransaction()
        {
            // Logic to create a transaction
            return Ok("Transaction created");
        }

        [HttpPatch("{id}")]
        public IActionResult UpdateTransaction(int id)
        {
            // Logic to update a transaction
            return Ok($"Transaction {id} updated");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTransaction(int id)
        {
            // Logic to delete a transaction
            return Ok($"Transaction {id} deleted");
        }
    }
}
