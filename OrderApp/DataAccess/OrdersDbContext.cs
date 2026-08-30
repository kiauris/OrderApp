using Microsoft.EntityFrameworkCore;
using OrderApp.Models;

namespace OrderApp.DataAccess;

public class OrdersDbContext(DbContextOptions<OrdersDbContext> options) : DbContext(options)
{
    public DbSet<Order> Orders =>  Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>()
            .Property(o => o.OrderNumber)
            .UseIdentityAlwaysColumn();
    }
}