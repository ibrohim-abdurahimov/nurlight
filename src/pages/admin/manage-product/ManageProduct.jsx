import React from 'react'
import { useFetch } from '../../../hooks/UseFetch'
import Products from '../../../components/products/Products'
import { useStateValue } from '../../../context'

const ManageProduct = () => {
  const [state] = useStateValue()
    const { data, error, loading } = useFetch('/products', {}, [state.reload])
  return (
    <div>
        <Products admin={true} data={data}/>
    </div>
  )
}

export default ManageProduct