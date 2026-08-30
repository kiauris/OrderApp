import {useEffect, useState} from 'react'
import {formatDate} from "../utility/formatDate.js";

function OrderDetails({id}) {
    const [order, setOrder] = useState(null)
    
    useEffect(() => {
        fetch(`http://localhost:5094/api/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    
    if (order == null) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <h2>Заказ №{order.orderNumber}</h2>
            
            <p>Город отправителя: {order.senderCity}</p>
            <p>Адрес отправителя: {order.senderAddress}</p>
            <p>Город получателя: {order.receiverCity}</p>
            <p>Адрес получателя: {order.receiverAddress}</p>
            <p>Вес груза: {order.weight}</p>
            <p>Дата забора груза: {formatDate(order.pickupDate)}</p>
            
        </div>
    )
}

export default OrderDetails;