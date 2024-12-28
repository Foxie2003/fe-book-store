"use client";
import CartStyle from "@/styles/user/user.cart.module.css";
import Cart from "@/components/user/cart/cart";

function CartPage() {
  return (
    <div>
      {/* Cart title */}
      <div className={CartStyle["cart-title"]}>GIỎ HÀNG (0 sản phẩm)</div>
      {/* Cart body */}
      {/* <EmptyCart /> */}
      <Cart />
    </div>
  );
}

export default CartPage;
