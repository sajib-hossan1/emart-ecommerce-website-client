import React, { useContext, useEffect, useState } from 'react';
import { CartContexts } from '../../contexts/CartContext';
import './Cart.css'
import CartSingleItem from '../CartSingleItem/CartSingleItem';
import { toast } from 'react-toastify';
import { useScrollTop } from '../../hooks/useScrollTop';
import { Link } from 'react-router-dom';
import DynaTitle from '../../Helmet/DynaTitle';

const Cart = () => {
    useScrollTop();
    const {cartItems, clearCart} = useContext(CartContexts);

    const [grandTotal , setGrandTotal] = useState(0);
    const [cupon, setCupon] = useState(false);

    const totalItems = cartItems.reduce( (prev, item) => prev + item.quantity, 0 );
    const subTotal = cartItems.reduce( (prev, item) => prev + item.price * item.quantity, 0 );
    const tax = subTotal * ( 10 / 100);
    const deliveryCharge = 15;
    
    useEffect( () => {
        setGrandTotal(subTotal + parseFloat(tax) + deliveryCharge);
    }, [subTotal, tax])

    const cuponcode = e => {
        e.preventDefault();
        let cupon1 = "SAJIB";
        const userInput = e.target.text.value;

        if(subTotal < 100){
            return toast.info("Make atleast $100 sub total amount")
        }
        if(cupon === true){
            e.target.text.value = "";
            return toast.info("You already used a cupon😊.")
        };

        if(userInput !== cupon1){
            e.target.text.value = "";
            return toast.info("Please use a valid cupon😊.")
        };

        if(cupon1 === userInput){
            setCupon(true)
            setGrandTotal(grandTotal - 20);
            toast.success("Cupon Applied😍.")
        };

        e.target.text.value = "";
    };

    const removeCupon = () => {
        setGrandTotal(grandTotal + 20);
        setCupon(false);
    }

    return (
        <div className='cart-main'>
            <DynaTitle title="Cart"/>
            <div className="container">
                <div className="cart-main-title">
                    { 
                        cartItems.length === 0 ? <h3 className=''>You do not have any product.</h3> : 
                        cartItems.length > 1 ? <h3 className='mb-3'>Your Cart Items</h3> : <h3>Your Cart Item</h3>
                    }
                </div>
                { cartItems.length >= 1 && 
                <div className="row cart-row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-8">
                                {
                                    cartItems?.map( (item,index) => 
                                        <CartSingleItem key={index} item={item} />
                                    )
                                }
                                <div className="clear-all-product">
                                    <button onClick={clearCart}>
                                        { cartItems.length > 1 ? "Clear All Products" : "Clear Product"}
                                    </button>
                                </div>
                                <div className="sub-total text-end">
                                    <hr />
                                    <h5>Sub Total ({totalItems} {totalItems === 1 ? "Item" : "Items"}) : ${subTotal}</h5>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="grand-total-box">
                                    <div className="price-tax-charge">
                                        <div className='d-flex justify-content-between'>
                                            <span>Sub Total : </span>
                                            <span>${subTotal}</span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <span>Tax : </span>
                                            <span className='text-end'>${tax.toFixed(2)}</span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <span>Delivery Charge : </span>
                                            <span className='text-end'>${deliveryCharge}</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="grand-total d-flex justify-content-between">
                                        <span>Total : </span>
                                        <span className='text-end'>${grandTotal}</span>
                                    </div>
                                    <div className="cupon">
                                        {cupon && <p className='text-end'>
                                                <button onClick={removeCupon}><i className="fas fa-minus" /> </button>
                                                Cupon applied -$20
                                            </p>}
                                    </div>
                                    <div className="cupon-code mt-5">
                                        <span className='d-block mb-2'>Try a cupon to get a discount</span>
                                        <form className='d-flex search-form align-items-center' onSubmit={cuponcode}>
                                            <input className="form-control me-2"  type="text" name='text' placeholder={`type 'SAJIB'`} />
                                            <input className='cupon-submit-btn' type="submit" />
                                        </form>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="/shipping" className='delivery-btn'>Proceed To Delivery</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Cart;