using Microsoft.EntityFrameworkCore;
using OrderApp.Contracts;
using OrderApp.DataAccess;
using OrderApp.Models;

namespace OrderApp.Services;

public class OrderService : IOrderService
{
    private readonly OrdersDbContext _dbContext;

    public OrderService(OrdersDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public async Task<IReadOnlyList<GetOrderResponse>> GetAll(CancellationToken cancellationToken)
    {
        return await _dbContext.Orders
            .Select(o => new GetOrderResponse(
                o.Id,
                o.OrderNumber,
                o.SenderCity,
                o.SenderAddress,
                o.ReceiverCity,
                o.ReceiverAddress,
                o.Weight,
                o.PickupDate))
            .ToListAsync(cancellationToken);
    }

    public async Task<GetOrderResponse?> GetById(Guid id, CancellationToken cancellationToken)
    {
        var order = await _dbContext.Orders.FindAsync(id,  cancellationToken);
        return order == null
            ? null
            : new GetOrderResponse(
                order.Id,
                order.OrderNumber,
                order.SenderCity,
                order.SenderAddress,
                order.ReceiverCity,
                order.ReceiverAddress,
                order.Weight,
                order.PickupDate);
    }

    public async Task<Order?> Create(CreateOrderRequest request, CancellationToken cancellationToken)
    {
        var order = new Order(
            senderCity: request.SenderCity,
            senderAddress: request.SenderAddress,
            receiverCity: request.ReceiverCity,
            receiverAddress: request.ReceiverAddress,
            weight: request.Weight,
            pickupDate: request.PickupDate);
        
        await _dbContext.Orders.AddAsync(order,  cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        
        return order;
    }
}