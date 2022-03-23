import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img,price,ratings,seller} = props.product
    const {handelAddToCart} = props;
        // console.log(props.product);
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className="name-info">{name}</h3>
                <p className="name-info">Price : ${price}</p>
                <br></br>
                <p className="name-info"><small>Seller : {seller}</small></p>
                <p className="name-info"><small>Ratting : {ratings} stars</small></p>
            </div>
            <button onClick={()=> handelAddToCart(props.product)} className='btn-cart'>
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;