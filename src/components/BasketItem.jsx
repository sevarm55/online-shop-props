export const BasketItem = ({cart ,onCountMinus, onCountPlus, onDelete}) => {
    return <>
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
    </>
}