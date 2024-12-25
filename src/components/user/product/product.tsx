import ProductStyle from "@/styles/user/user.product.module.css";
import Image from "next/image";

function Product() {
  return (
    <div className={ProductStyle["product-container"]}>
      <Image src={"/logo.png"} width={172} height={198} alt="Product image" />
      <div className={ProductStyle["product-title"]}>Tên sản phẩm</div>
      <div className={ProductStyle["product-price-container"]}>
        <div className={ProductStyle["product-price"]}>100.000 đ</div>
        <div className={ProductStyle["product-sale-percent"]}>23%</div>
      </div>
      <div className={ProductStyle["product-old-price"]}>200.000 đ</div>
      <div className={ProductStyle["product-sold-container"]}>
        <div className={ProductStyle["product-sold-text"]}>Đã bán: </div>
        <div className={ProductStyle["product-sold-number"]}>300</div>
      </div>
    </div>
  );
}

export default Product;
