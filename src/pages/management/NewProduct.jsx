import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const NewProduct = () => {

    const [name,setName] = useState("");
    const [price,setPrice] = useState();
    const [stock,setStock] = useState();
    const [image,setImage] = useState("");

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
        <article>
            <form>
                <h2>New Product</h2>
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
                <button type="submit">Create</button>
            </form>
        </article>
      </main>
    </div>
  )
}

export default NewProduct
