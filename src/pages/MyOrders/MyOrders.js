import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useScrollTop } from '../../hooks/useScrollTop';
import './MyOrders.css'
import MyOrderSingle from '../MyOrderSingle/MyOrderSingle';

const MyOrders = () => {
    useScrollTop();
    const [myOrders, setMyOrders] = useState(["a"]);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext);

    useEffect( () => {
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
        .finally(() => setLoading(false));
    }, [user.email]);
    return (
        <div className='myOrders-main'>
            <div className="container">
                <h3 className='myOrders-title'>Your All Orders</h3>
                {
                    myOrders.length === 0 && <div className='not-product-txt'>
                        <h3>You Do Not Have Any Previous Orders.</h3>
                    </div>
                }
                {
                    loading ? 
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    :
                    <MyOrderSingle orders={myOrders} />
                }

            </div>
        </div>
    );
};

export default MyOrders;