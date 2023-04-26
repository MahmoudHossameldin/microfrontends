import { useState } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@goods:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const updateCart = () => {
    setCart(() => {
      const storagedCart = localStorage.getItem('@goods:cart');

      if (storagedCart) {
        return JSON.parse(storagedCart);
      }

      return [];
    });
  };
  const removeFromCart = (id) => {
    updateCart();
    let productExistOnCart = false;

    let newCart = cart.filter((product) => {
      if (product.id === id) {
        productExistOnCart = true;
      }
      return product.id !== id;
    });

    if (productExistOnCart) {
      localStorage.setItem('@goods:cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  return { removeFromCart, cart };
}
