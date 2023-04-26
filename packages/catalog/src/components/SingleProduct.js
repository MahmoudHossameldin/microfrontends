import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useCart } from '../useCart';

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MahmoudHossameldin/mfe-assets/main/products.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((prod) => prod.id === Number(productId));

        if (product) {
          setProduct(product);
          setError(false);
        } else {
          setError(true);
        }
      });
  }, [productId]);

  if (error) {
    return <Error className='error'>Error... Product not found!</Error>;
  }

  return (
    product && (
      <Wrapper>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock} items
        </p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        <p>{product.description}</p>
      </Wrapper>
    )
  );
}

const Error = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  text-align: center;

  button {
    width: 100%;
    background-color: #c72828;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    padding: 20px 0;
    cursor: pointer;
    border: none;

    :active {
      background-color: yellow;
      color: #000;
    }
  }
`;
