namespace Finances.Models;

public class Tag
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public List<Transaction> Transactions { get; set; } = [];
}