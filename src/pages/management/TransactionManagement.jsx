import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Link } from 'react-router-dom';

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const TransactionManagement = () => {
    const orderItem = [
        {
        name: "Puma Shoes",
        image: img,
        _id: "asdsaasdas",
        quantity: 4,
        price: 2000,
      }
    ]

    const [order,setOrder] = useState({
        name : "Abhishek Singh",
        address : "77 Black Street",
        city : "Neyword",
        country : "Nevada",
        state : "India",
        pinCode : 122022,
        status: "Processing",
        subtotal : 4000,
        discount : 1200,
        shippingCharges : 0,
        tax : 200,
        total : (4000 + 200 + 0) - 1200,
        orderItem,
        _id : "bxhcyuyuegf"
    });
    
    const {
        name,
        address,
        city,
        country,
        state,
        pinCode,
        subtotal,
        shippingCharges,
        tax,
        discount,
        total,
        status,
      } = order;

      const handleUpdate = () => {
        setOrder((prev) => ({
          ...prev,
          status: prev.status === "Processing" ? "Shipped" : "Delivered",
        }));
      };

    // function addItem() {
    //     setOrder((prevItem)=> [...prevItem],{name : name})
    // }
  return (
    <div className='admin-container'>
      <AdminSidebar/>
      <main className='product-management-new'>
        <section>
            <h2>Order Items</h2>
                {orderItem.map((e)=> {
                    return <div key={e._id}>
                    <img src={e.image} alt='product-img' height={60} width={60} style={{borderRadius : "5px"}}/>
                    <Link to={`/product/${e._id}`}><p>{e.name}</p></Link>
                    <p>${e.price} x {e.quantity} = ${e.price * e.quantity}</p>
                </div>
                })}
        </section>
        <article className="shipping-info-card">
            <h1>Order Info</h1>
            <h5>User Info</h5>
            <p>Name : {name}</p>
            <p>Address : {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>
            <h5>Amount Info</h5>
            <p>Subtotal : {subtotal}</p>
            <p>Shipping Charges : {shippingCharges}</p>
            <p>Tax : {tax}</p>
            <p>Discount : {discount}</p>
            <p>Total : {total}</p>
            <h5>Status Info</h5>
            <p>Status : <span className={status==="Processing"? "red" : status==="Delivered"? "purple" : "green"}>{status}</span></p>
            <button onClick={handleUpdate}>process status</button>
        </article>
      </main>
    </div>
  )
}

export default TransactionManagement
