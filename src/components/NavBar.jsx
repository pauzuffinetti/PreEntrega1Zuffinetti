import {CartWidget} from './CartWidget'

export const NavBar = () => {
    return (
    <>
    <h6>Niorel Estética</h6>
    <ul>
        <li><a href="#">Tratamientos</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>
    <CartWidget />


    </>
    )
}