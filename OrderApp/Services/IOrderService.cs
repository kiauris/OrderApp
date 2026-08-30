using OrderApp.Contracts;
using OrderApp.Models;

namespace OrderApp.Services;

public interface IOrderService
{
    Task<IReadOnlyList<GetOrderResponse>> GetAll(CancellationToken cancellationToken);
    Task<GetOrderResponse?> GetById(Guid id, CancellationToken cancellationToken);
    Task<Order?> Create(CreateOrderRequest request, CancellationToken cancellationToken);
}