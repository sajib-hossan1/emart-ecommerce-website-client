import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import './ShippingInfo.css'
import { CartContexts } from '../../contexts/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

const ShippingInfo = () => {
    const {user} = useContext(AuthContext);
    const {cartItems, clearCart, totalAmount} = useContext(CartContexts);
    
    const navigate = useNavigate();

    const confirmOrder = (e) => {
        e.preventDefault();
        const userNumber = e.target.number.value;
        const address = e.target.address.value;
        const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');


        if(!userNumber){
            return toast.info("Please provide a valid number")
        }
        if(!address){
            return toast.info("Please provide a valid address")
        }

        const deliveryInfo = {
            products : cartItems,
            email : user.email,
            name : user.displayName,
            phone : userNumber,
            address,
            date : dateTime,
            status : "Pending",
            grandTotal : totalAmount
        };
        
        fetch("http://localhost:5000/order", {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(deliveryInfo)
        })
        .then(data => data.json())
        .then(result => {
            if(result.insertedId){
                clearCart();
                navigate("/");
                return toast.success('Your Order Placed Successfully.')
            }
        });


        e.target.number.value = "";
        e.target.address.value = "";
    };

    return (
        <div className='delivery-info-main'>
            <div className="container">
                <div className="delivery-box">
                    <form onSubmit={confirmOrder}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" value={user.email} disabled placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="number" name='number' className="form-control" placeholder="Type your phone number"/>
                        </div>
                        <div className="form-group">
                            <label>Your Full Address</label>
                            <textarea name='address' className="form-control" rows="4"></textarea>
                        </div>
                        <button type="submit" className="deliveryinfo-btn">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;