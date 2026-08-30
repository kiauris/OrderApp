import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import OrdersList from "./components/OrdersList.jsx";
import OrderDetails from "./components/OrderDetails.jsx";
import CreateOrderForm from "./components/CreateOrderForm.jsx";

function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:5094/api/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
  }, [])
  
  const [selectedOrder, setSelectedOrder] = useState(null)
  const handleOrderClick = (id) => {
    setSelectedOrder(id)
  }
  const handleOrderCreated = (order) => {
    setOrders(prevOrders => [...prevOrders, order])
  }
  
  return (
      <div className="order-app">
        <h1>Заказы</h1>
        
          <CreateOrderForm onOrderCreated={handleOrderCreated} />  
          
          <div className="orders-info">
              <div className="orders-table">
                  <OrdersList orders={orders} onOrderClick={handleOrderClick} />
              </div>
              
              <div className="order-details">
                  {selectedOrder 
                      ? (<OrderDetails id={selectedOrder}/>) 
                      : (<p>Выберите заказ, чтобы посмотреть подробности</p>)
                  }
              </div>
          </div>
      </div>
  )
}

export default App
