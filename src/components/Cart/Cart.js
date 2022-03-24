import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    // console.log(cart);
    let total= 0
    let shipping= 0
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const totalTax = total * 0.15
    const tax = totalTax.toFixed(2)
    const grandTotal= total + shipping + parseFloat(tax)
    
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>selected Items : {cart.length} </p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>15% Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal}</h5>
        </div>
    );
};

export default Cart;