using Finances.Enums;
using Microsoft.EntityFrameworkCore;

namespace Finances.Models;

public class Transaction
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }

    [Precision(18, 2)]
    public decimal Amount { get; set; }
    public DateOnly Date { get; set; }
    public TransactionType Type { get; set; } = TransactionType.Expense;
    public TransactionStatus Status { get; set; } = TransactionStatus.Cleared;
    public Guid CategoryId { get; set; }
    public Category Category { get; set; } = null!;
    public List<Tag> Tags { get; set; } = [];
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}