import { useEffect, useState } from "react"
import { BasketItem } from "./BasketItem"

export const Basket = ({cart, onCountPlus,onCountMinus,onDelete}) => {
    
    const [total,setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((totalsum,todo) => totalsum + (todo.price * todo.count),0))
        console.log(cart);
    },[cart])
    
    return <div className="col-md-5">
        <h4>Total: {total} $</h4>
        <div style={{
            position: "sticky",
            top: "20px"
        }}>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                <BasketItem 
                    cart={cart} 
                    key={cart.id}
                    onCountMinus={onCountMinus} 
                    onCountPlus={onCountPlus} 
                    onDelete={onDelete} />
            </tbody>
        </table>
        </div>
    </div>
}