import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <Link to="/Cart">
            <img src={cart} height={25}/>
            <span>4</span>
        </Link>


    )
}