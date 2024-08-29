<<<<<<< HEAD
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
=======
export const BasketItem = ({id,name, price, count, onCountMinus, onCountPlus, onDelete}) => {
    return <tr>
    <td>{name}</td>
    <td>{price} $</td>
    <td>{count}</td>
    <td>{count * price} $</td>
        <td 
        style={{
            display: "flex",
            gap: "4px",
        }}
        >
            <button onClick={() => onCountMinus(id)} className="btn btn-outline-info">-</button>
            <button onClick={() => onCountPlus(id)} className="btn btn-outline-info">+</button>
            <button onClick={() => onDelete(id)} className="btn btn-outline-info">x</button>
        </td>
</tr>
>>>>>>> 6c59a953d4b7a3f57ee08d1b4ac55f8b17970714
}