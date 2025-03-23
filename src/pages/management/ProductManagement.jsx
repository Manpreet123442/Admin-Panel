import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const ProductManagement = () => {

    const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

    const [name,setName] = useState("Puma Shoes Air Jordan 2023");
    const [price,setPrice] = useState(2000);
    const [stock,setStock] = useState(10);
    const [image,setImage] = useState(img);

    const changeImageHandler = (e) => {
        const file = e.target.files?.[0];

        if(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              if (typeof reader.result === "string") {
                setImage(reader.result);
              }
            };
        }
    }

  return (
    <div className='admin-container'>
      <AdminSidebar/>
      <main className='product-management-new'>
        <section>
            <strong>ID - ncjbceryufvreyu</strong>
            <img src={image} alt={`${name}`}/>
            <p>{name}</p>
            {
                stock > 0? 
                <span className='green'>{stock} Available</span> :
                <span className='red'>Not Available</span>
            }
            <h3>${price}</h3>
        </section>
        <article>
            <form>
                <h2>Manage</h2>
                <div>
                    <label>Name</label>
                    <input type = "text" placeholder='Name' value={name} onChange={((e)=> setName(e.target.value))}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type = "number" placeholder='Price' value={price} onChange={((e)=> setPrice(Number(e.target.value)))}/>
                </div>
                <div>
                    <label>Stock</label>
                    <input type = "number" placeholder='Stock' value={stock} onChange={((e)=> setStock(Number(e.target.value)))}/>
                </div>
                <div>
                    <label>Product Image</label>
                    <input type = "file" placeholder='Image' onChange={changeImageHandler}/>
                </div>

                {image && <img src={image} alt='new image'/>}
                <button type="submit">Update</button>
            </form>
        </article>
      </main>
    </div>
  )
}

export default ProductManagement
