import { useEffect, useState } from "react"
import { stroedShoppingCart } from "../../utilities/fakedb"

const useCart = (products) => {

    const [cart, setCart] = useState([])
    useEffect(() => {
        const stroedCart = stroedShoppingCart();
        const saveCart = [];
        for (const id in stroedCart) {
            const addedItem = products?.find(product => product.id === id);
            if (addedItem) {
                const quantity = stroedCart[id];
                addedItem.quantity = quantity;
                saveCart.push(addedItem);
            }
        }
        setCart(saveCart);
    }, [products])

    return [cart, setCart]
}

export default useCart;