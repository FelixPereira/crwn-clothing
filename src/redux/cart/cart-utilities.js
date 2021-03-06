export const addItemToCart = (itemToAdd, cartItems) => {
  const existingItem = cartItems.find(
      cartItem => cartItem.id === itemToAdd.id
    );



  if(existingItem) {
    return cartItems.map(
      cartItem => cartItem.id === itemToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1} 
      : cartItem
      );
  }

  return [...cartItems, {...itemToAdd, quantity: 1}]
}