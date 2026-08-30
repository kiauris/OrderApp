namespace OrderApp.Contracts;

public record GetOrderResponse(
    Guid Id,
    long OrderNumber,
    string SenderCity,
    string SenderAddress,
    string ReceiverCity,
    string ReceiverAddress,
    decimal Weight,
    DateTime PickupDate);