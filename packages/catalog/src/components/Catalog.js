import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MahmoudHossameldin/mfe-assets/main/products.json'
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log('test');
  console.log(products);

  return (
    <Wrapper>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Link to={`/${product.id}`}>
              <h3>{product.title}</h3>
              <div className='thumbnail'>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 20px;
  text-align: center;

  h3 {
    color: #030303;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

    li {
      background-color: #f0f0f0;
      padding: 2rem;
      margin-bottom: 4rem;

      a {
        text-decoration: none;
      }

      .thumbnail {
        width: 90%;
        height: 250px;
        margin: 0 auto 40px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
