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
                {
                    cart.map(elm => <tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.price} $</td>
                        <td>{elm.count}</td>
                        <td>{elm.count * elm.price} $</td>
                        
                            <td 
                            style={{
                                display: "flex",
                                gap: "4px",
                            }}
                            >
                                <button onClick={() => onCountMinus(elm)} className="btn btn-outline-info">-</button>
                                <button onClick={() => onCountPlus(elm)} className="btn btn-outline-info">+</button>
                                <button onClick={() => onDelete(elm.id)} className="btn btn-outline-info">x</button>
                            </td>
                    </tr>)
                }
            </tbody>
        </table>
        </div>
    </div>
}