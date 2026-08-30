using System.ComponentModel.DataAnnotations;

namespace OrderApp.Contracts;

public record CreateOrderRequest(
    [Required] string SenderCity,
    [Required] string SenderAddress,
    [Required] string ReceiverCity,
    [Required] string ReceiverAddress,
    [Required] [Range(0.01, double.MaxValue)] decimal Weight,
    [Required] DateTime PickupDate);