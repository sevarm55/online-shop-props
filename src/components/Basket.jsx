<<<<<<< HEAD
import { useEffect, useState } from "react"
import { BasketItem } from "./BasketItem"

=======
import { BasketItem } from "./BasketItem"


>>>>>>> 6c59a953d4b7a3f57ee08d1b4ac55f8b17970714
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
<<<<<<< HEAD
                <BasketItem 
                    cart={cart} 
                    key={cart.id}
                    onCountMinus={onCountMinus} 
                    onCountPlus={onCountPlus} 
                    onDelete={onDelete} />
=======
                {
                    cart.map(elm => <BasketItem key={elm.id} {...elm} onCountMinus={onCountMinus} onCountPlus={onCountPlus} onDelete={onDelete} />)
                }
>>>>>>> 6c59a953d4b7a3f57ee08d1b4ac55f8b17970714
            </tbody>
        </table>
        </div>
    </div>
}