import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Container from 'react-bootstrap/Container';


export const Cart = () => {
    const {items, removeItem, reset} = useContext(ItemsContext);

    return (
    <Container>
        <button onClick={reset}>Vaciar</button>
        {items.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.imageId} height={200} />
                    <p>{item.quantity}</p>
                    <p onClick={() => removeItem(item.id)}>X</p>
                </div>
            );
        })}
    </Container>
    );
}