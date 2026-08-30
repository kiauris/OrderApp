import {formatDate} from "../utility/formatDate.js";

function OrdersList({orders, onOrderClick}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Номер заказа</th>
                <th>Город отправителя</th>
                <th>Адрес отправителя</th>
                <th>Город получателя</th>
                <th>Адрес получателя</th>
                <th>Вес груза</th>
                <th>Дата забора груза</th>
            </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id} onClick={() => onOrderClick(order.id)}>
                        <td>{order.orderNumber}</td>
                        <td>{order.senderCity}</td>
                        <td>{order.senderAddress}</td>
                        <td>{order.receiverCity}</td>
                        <td>{order.receiverAddress}</td>
                        <td>{order.weight}</td>
                        <td>{formatDate(order.pickupDate)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default OrdersList;