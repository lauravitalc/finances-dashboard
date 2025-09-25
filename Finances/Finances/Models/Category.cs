namespace Finances.Models;

public class Category
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public string? ColorHex { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}