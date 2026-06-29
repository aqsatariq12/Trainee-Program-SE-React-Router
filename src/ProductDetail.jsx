import React from 'react'
import { useParams } from 'react-router';
export const ProductDetail = () => {

    const {id} = useParams();
  return (
    <div><h1>Product Detils</h1>
    <h2>{id}</h2>
    
    </div>
  )
}
