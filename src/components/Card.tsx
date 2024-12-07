import { SetStateAction } from 'react';
import './Card.css'


function Card({ producto, setCarrito, carrito }) {
    return (
        <div className='carta'>
            <img src={producto.image} />
            <h1>{producto.title}</h1>
            <button onClick={() => {
                setCarrito([...carrito, producto])
            }} >Agregar al carrito</button>
        </div>
    )
}

export default Card;