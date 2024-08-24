import { BasketItem } from "./BasketItem"

export const Basket = ({cart, onCountPlus,onCountMinus,onDelete}) => {
    return <div className="col-md-5">
        <h3>Basket: {cart.length}</h3>
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