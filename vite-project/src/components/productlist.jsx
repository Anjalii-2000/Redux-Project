import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import "./productList.css";

function ProductList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(

    (state) => state.products
  );
  console.log("items", items),
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch])
  if (loading) return <h2> Loading....</h2>
  if (error) return <h2>Error : {error}</h2>
  return (
    <div className="product-container">
      <h1 className="title">Products</h1>

      <div className="product-grid">
        {items.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;