import React from 'react'
import { useFetch } from '../../../hooks/UseFetch'
import Products from '../../../components/products/Products'

const ManageProduct = () => {
    const { data, error, loading } = useFetch('/products')
  return (
    <div>
        <h2>ManageProduct</h2>
        <Products admin={true} data={data}/>
    </div>
  )
}

export default ManageProduct