import React from 'react';
import './MyOrderSingle.css'

const MyOrderSingle = ({orders}) => {
    const pendingItems = orders.filter( item => item.status === "Pending" );
    const shippedItems = orders.filter( item => item.status === "Shipped" );
    return (
        <div>
            {   pendingItems.length === 0 ? <></>
                : 
                    <>
                        <h3>Pending Orders</h3>
                        <div className='row myOrders-row'>
                            {
                                pendingItems.map( (item) => 
                                <div key={item._id} className='col-lg-12'>
                                    <h5 className=''>Date : {item.date}</h5>
                                    <h5>Ordered Products</h5>
                                    <div className="row gy-3">
                                        {
                                            item.products.map((product) => 
                                                <div key={product.id} className="col-lg-6">
                                                    <div className="order-product-box">
                                                        <div className='img-box'>
                                                            <img className='img-fluid' src={product.images[0]} alt="" />
                                                        </div>
                                                        <div className='order-product-details'>
                                                            <h4>{product.title}</h4>
                                                            <p className='m-0'>Brand : {product.brand}</p>
                                                            <p>Quantity : {product.quantity}</p>
                                                            <h6 className='mb-0'>Price : ${product.price}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <h5>Grand Total : ${item.grandTotal}</h5>
                                    </div>
                                    <hr />
                                </div>
                                )
                            }
                        </div>
                    </>
            }
            {   shippedItems.length === 0 ? <></>
                : 
                    <>
                        <h3 className='mt-5'>Shipped Orders</h3>
                        <div className='row myOrders-row'>
                            {
                                shippedItems.map( (item) => 
                                <div key={item._id} className='col-lg-12'>
                                    <h5 className=''>Date : {item.date}</h5>
                                    <h5>Ordered Products</h5>
                                    <div className="row gy-3">
                                        {
                                            item.products.map(product => 
                                                <div key={product.id} className="col-lg-6">
                                                    <div className="order-product-box">
                                                        <div className='img-box'>
                                                            <img src={product.images[0]} alt="" />
                                                        </div>
                                                        <div className='order-product-details'>
                                                            <h4>{product.title}</h4>
                                                            <p className='m-0'>Brand : {product.brand}</p>
                                                            <p>Quantity : {product.quantity}</p>
                                                            <h6 className='mb-0'>Price : {product.price}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            )
                                        }
                                        <h5>Grand Total : ${item.grandTotal}</h5>
                                    </div>
                                    <hr />
                                </div>
                                )
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default MyOrderSingle;