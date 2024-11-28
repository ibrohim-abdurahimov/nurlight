import React, { useRef } from 'react'
import axios from '../../../api'
import './CreateProduct.scss'




const CreateProduct = () => {
    const title = useRef(null)
    const img = useRef(null)
    const category = useRef(null)
    const price = useRef(null)
    const lastprice = useRef(null)
    const stock = useRef(null)
    const desc = useRef(null)
    const thumbnails = useRef(null)
    const handleCreateProduct = (e)=>{
        e.preventDefault()
        let newProduct = {
            title: title.current.value,
            img: img.current.value,
            stock: stock.current.value,
            category: category.current.value,
            price: price.current.value,
            lastprice: lastprice.current.value,
            desc: desc.current.value,
            thumbnails: [thumbnails.current.value,thumbnails.current.value]
        }
        axios
            .post('/products', newProduct)
            .then(res=> {
                console.log(res)
                title.current.value = ""
                img.current.value = ""
                stock.current.value = ""
                category.current.value = ""
                price.current.value = ""
                lastprice.current.value = ""
                desc.current.value = ""
                thumbnails.current.value = ""
            })
            .catch(res=> console.log(res))
            .finally(res=> console.log(res))
            
        
        
    }
  return (
    <div className='create'>
        <h2>Create product</h2>
        <form className='create__inp' onSubmit={handleCreateProduct} action="">
            <input required ref={title} type="text" placeholder='Title'/>
            <input required ref={category} type="text" placeholder='Category'/>
            <input required ref={price} type="text" placeholder='price'/>
            <input required ref={lastprice} type="text" placeholder='lastprice'/>
            <input required ref={stock} type="text" placeholder='stock'/>
            <input required ref={desc} type="text" placeholder='desc'/>
            <input required ref={img} type="text" placeholder='img'/>
            <input required ref={thumbnails} type="text" placeholder='thumbnails'/>
            <button>Create</button>
        </form>
    </div>
  )
}

export default CreateProduct