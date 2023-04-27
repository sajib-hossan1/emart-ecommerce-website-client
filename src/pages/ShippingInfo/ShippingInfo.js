import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import './ShippingInfo.css'

const ShippingInfo = () => {
    const {user} = useContext(AuthContext);

    const confirmOrder = (e) => {
        e.preventDefault();
        const userNumber = e.target.number.value;
        const address = e.target.address.value;

        const deliveryInfo = {
            email : user.email,
            name : user.displayName,
            phone : userNumber,
            address
        }
    };

    return (
        <div className='delivery-info-main'>
            <div className="container">
                <div className="delivery-box">
                    <form onSubmit={confirmOrder}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" value={user.email} disabled placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="number" name='number' className="form-control" placeholder="Type your phone number"/>
                        </div>
                        <div className="form-group">
                            <label>Your Full Address</label>
                            <textarea name='address' class="form-control" rows="4"></textarea>
                        </div>
                        <button type="submit" className="deliveryinfo-btn">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;