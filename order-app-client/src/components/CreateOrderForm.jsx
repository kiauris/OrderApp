import {useState} from 'react'

function  CreateOrderForm({onOrderCreated}) {
    const initialState = {
        senderCity: '',
        senderAddress: '',
        receiverCity: '',
        receiverAddress: '',
        weight: '',
        pickupDate: ''
    }
    const [form, setForm] = useState(initialState)
    
    const [error, setError] = useState('')
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    const handleReset = () => {
        setForm(initialState)
        setError('')
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setError('')
        
        const request = {
            senderCity: form.senderCity,
            senderAddress: form.senderAddress,
            receiverCity: form.receiverCity,
            receiverAddress: form.receiverAddress,
            weight: Number(form.weight),
            pickupDate: new Date(form.pickupDate).toISOString()
        }
        
        const response = await fetch('http://localhost:5094/api/Orders',{
            method : 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        
        if (response.ok) {
        const createOrderResponse = await response.json()
        onOrderCreated(createOrderResponse)
        }
        else {
            setError("Failed to create order")
        }
    }
    
    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label>Город отправителя
                    <input type="text" name="senderCity" value={form.senderCity} onChange={handleChange} required />
                </label>
            </div>
            
            <div className="form-row">
                <label>Адрес отправителя
                    <input type="text" name="senderAddress" value={form.senderAddress} onChange={handleChange} required />
                </label>
            </div>
            
            <div className="form-row">
                <label>Город получателя
                    <input type="text" name="receiverCity" value={form.receiverCity} onChange={handleChange} required />
                </label>
            </div>
            
            <div className="form-row">
                <label>Адрес получателя
                    <input type="text" name="receiverAddress" value={form.receiverAddress} onChange={handleChange} required />
                </label>
            </div>
            
            <div className="form-row">
                <label>Вес груза
                    <input type="number" step="0.01" name="weight" value={form.weight} onChange={handleChange} required />
                </label>
            </div>
            
            <div className="form-row">
                <label>Дата забора груза
                    <input type="datetime-local" name="pickupDate" value={form.pickupDate} onChange={handleChange} required />
                </label>
            </div>

            {error && <p>{error}</p>}
            <div className="form-buttons">
                <button type={'submit'}>Создать заказ</button>
                <button type={'button'} onClick={handleReset}>Очистить</button>
            </div>
        </form>
    )
}

export default CreateOrderForm