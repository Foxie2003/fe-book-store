import CartStyle from "@/styles/user/user.cart.module.css";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

function EmptyCart() {
  return (
    <div className={CartStyle["empty-cart"]}>
      <div className={CartStyle["empty-cart-image"]}>
        <Image
          src={"/empty-cart-icon.png"}
          width={100}
          height={100}
          alt="icon"
        />
      </div>
      <div>Không có sản phẩm nào trong giỏ hàng</div>
      <div className={CartStyle["shopping-button"]}>
        <FaCartShopping size={20} color="#D10000" />
        <div className={CartStyle["shopping-button-text"]}>
          Mua sắm ngay nào
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
