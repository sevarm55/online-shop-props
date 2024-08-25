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
}