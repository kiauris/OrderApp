using Microsoft.AspNetCore.Mvc;
using OrderApp.Contracts;
using OrderApp.Services;

namespace OrderApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _service;
    
    public OrdersController(IOrderService service)
    {
        _service = service;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        var orders = await _service.GetAll(cancellationToken);
        
        return Ok(orders);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id, CancellationToken cancellationToken)
    {
        var order = await _service.GetById(id, cancellationToken);
        
        return order == null ?  NotFound() : CreatedAtAction(nameof(GetById), new { id = order.Id }, order); 
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateOrderRequest request, CancellationToken cancellationToken)
    {
        var order = await _service.Create(request, cancellationToken);
        
        return order == null ?  BadRequest() : Ok(order);
    }
}