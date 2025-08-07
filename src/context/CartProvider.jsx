import CartContext from "./CartContext";

function CartProvider(children) {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const increment = (item) => { setCart([...cart, item]); };
    const decrement = (item) => { setCart([ ...cart.filter((i) => i.id !== item.id)]); }




    return (
        <CartContext.Provider value={{ cart, total, increment, decrement }}>
            
            {children}
        </CartContext.Provider>
    )

    }
export default CartProvider;