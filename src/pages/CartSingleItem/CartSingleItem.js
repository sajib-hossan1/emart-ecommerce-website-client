import React, { useContext } from 'react';
import './CartSingleItem.css'
import { CartContexts } from '../../contexts/CartContext';

const CartSingleItem = (props) => {
    const {removeFromCart, incQuantity, decQuantity} = useContext(CartContexts);
    const { images, title, brand, price, quantity, id, stock } = props.item;

    return (
        <div className="mb-4">
            <div className="cart-item-details">
                <div className="image-box">
                        <img className='img-fluid' src={images[0]} alt="ProductImage" />
                </div>
                <div className="prod-desc">
                    <div>
                        <h4>{title}</h4>
                        <p className='brand'>Brand : {brand}</p>
                        <p className='brand'>Stock : {stock}</p>
                        <p className='price'>Price : ${price}</p>
                    </div>
                    <div className="quan-remove">
                        <div className="cart-quantity">
                            <p>
                                Quantity :  <button onClick={ () => decQuantity(id)} className='quan-btn ms-2'>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={() => incQuantity(id, stock)} className='quan-btn'>+</button>
                            </p>
                        </div>
                        <button onClick={ () => removeFromCart(id)} className="cart-remove-btn">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSingleItem;