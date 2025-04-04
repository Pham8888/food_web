// src/models/checkoutModel.js
export const calculateTotal = (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// Có thể thêm logic phức tạp hơn như gọi API để kiểm tra promoCode