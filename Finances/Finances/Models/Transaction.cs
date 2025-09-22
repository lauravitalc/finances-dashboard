using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Finances
{
    public class Transaction
    {
        [Key]
        public int Id { get; set; }

        [StringLength(100)]
        public string? Description { get; set; } = string.Empty;

        [Required]
        [Precision(18, 2)]
        public decimal Amount { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [StringLength(50)]
        public string Category { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [StringLength(50)]
        public PaymentMethod? Method { get; set; }

        [StringLength(50)]
        public TransactionType Type { get; set; } = TransactionType.Expense;

        public DateTime? UpdatedAt { get; set; }
    }

    public enum PaymentMethod
    {
        Cash,
        CreditCard,
        DebitCard,
        BankTransfer,
        PIX,
        Other
    }

    public enum TransactionType
    {
        Income,
        Expense
    }
}