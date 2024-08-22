import { useState } from 'react';
import './ShoppingCart.css';

function Cart(){
    const [cart, setCart] = useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [message,setMessage]=useState('');
    const [quantity1,setQuantity1]=useState(1);
    const [quantity2,setQuantity2]=useState(1);
    const [quantity3,setQuantity3]=useState(1);
    const [quantity4,setQuantity4] = useState(1);
    const increaseQuantity=(setQuantity, currentQuantity)=>{
        setQuantity(currentQuantity+1);
    };
    const decreaseQuantity=(setQuantity, currentQuantity)=>{
        if (currentQuantity>1){
            setQuantity(currentQuantity-1);
        }
    };
    const addToCart=(productId,quantity)=>{
        setCart((prevCart)=>[...prevCart,{ productId,quantity }]);
        setCartCount(cartCount+quantity);
        setMessage(`Product ${productId} added to cart!`);
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="container">
            <div className="head">
                <h1>Shopping Cart</h1>
                <button id="mycart">My Cart ({cartCount})</button>
            </div>
            {message && <div className="message" style={{color:"green",fontWeight:"bold"}}>{message}</div>}
            <div className="content">
                <div className="products">
                    <div className="product1">
                        <div className="image">
                            <img src="product (1).png" alt="loading..." />
                        </div>
                        <div className="quantities">
                            <button onClick={()=>decreaseQuantity(setQuantity1,quantity1)}>-</button>
                            <span>{quantity1}</span>
                            <button onClick={()=>increaseQuantity(setQuantity1,quantity1)}>+</button>
                        </div>
                        <div className="add">
                            <button onClick={()=>addToCart(1,quantity1)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="product2">
                        <div className="image">
                            <img src="product (2).png" alt="loading..." />
                        </div>
                        <div className="quantities">
                            <button onClick={()=>decreaseQuantity(setQuantity2,quantity2)}>-</button>
                            <span>{quantity2}</span>
                            <button onClick={()=>increaseQuantity(setQuantity2,quantity2)}>+</button>
                        </div>
                        <div className="add">
                            <button onClick={()=>addToCart(2,quantity2)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="product3">
                        <div className="image">
                            <img src="product (3).png" alt="loading..." />
                        </div>
                        <div className="quantities">
                            <button onClick={()=>decreaseQuantity(setQuantity3,quantity3)}>-</button>
                            <span>{quantity3}</span>
                            <button onClick={()=>increaseQuantity(setQuantity3,quantity3)}>+</button>
                        </div>
                        <div className="add">
                            <button onClick={()=>addToCart(3,quantity3)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="product4">
                        <div className="image">
                            <img src="product (4).png" alt="loading..." />
                        </div>
                        <div className="quantities">
                            <button onClick={()=>decreaseQuantity(setQuantity4,quantity4)}>-</button>
                            <span>{quantity4}</span>
                            <button onClick={()=>increaseQuantity(setQuantity4,quantity4)}>+</button>
                        </div>
                        <div className="add">
                            <button onClick={()=>addToCart(4,quantity4)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;