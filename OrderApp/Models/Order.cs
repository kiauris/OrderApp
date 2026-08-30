using OrderApp.Contracts;

namespace OrderApp.Models;

public class Order
{
    public Order( 
        string senderCity,
        string senderAddress,
        string receiverCity,
        string receiverAddress,
        decimal weight,
        DateTime pickupDate)
    {
        SenderCity = senderCity;
        SenderAddress = senderAddress;
        ReceiverCity = receiverCity;
        ReceiverAddress = receiverAddress;
        Weight = weight;
        PickupDate = pickupDate;
    }
    
    public Guid Id { get; init; } 
    public long OrderNumber { get; init; }
    public string SenderCity { get; init; }
    public string SenderAddress { get; init; }
    public string ReceiverCity { get; init; }
    public string ReceiverAddress { get; init; }
    public decimal Weight { get; init; }
    public DateTime PickupDate { get; init; }
}