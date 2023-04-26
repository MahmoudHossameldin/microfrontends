import React from 'react';
import { useCart } from './useCart';
import styled from 'styled-components';

export default () => {
  const { cart, removeFromCart } = useCart();

  if (!cart.length) {
    return <Empty>Your cart is empty!</Empty>;
  }

  return (
    <Wrapper>
      {cart?.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.title} </h3>
            <div>
              <span className='price'>${item.price}</span>
              <span className='remove' onClick={() => removeFromCart(item.id)}>
                Remove
              </span>
            </div>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  list-style-type: none;
  max-width: 600px;
  margin: 50px auto;

  li {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    align-items: center;

    .price {
      color: green;
    }

    .remove {
      cursor: pointer;
      margin-left: 50px;
      font-size: 12px;
      color: red;
    }
  }
`;

const Empty = styled.div`
  font-size: 20px;
  margin: 50px;
`;
