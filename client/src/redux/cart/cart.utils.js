export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const dropItemFromCart = (cartItems, cartItemToDrop) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDrop.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDrop.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDrop.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
