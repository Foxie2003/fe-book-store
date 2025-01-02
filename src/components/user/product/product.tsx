import ProductStyle from "@/styles/user/user.product.module.css";
import Image from "next/image";
import Link from "next/link";

function Product() {
  return (
    <Link
      href={"/user/productDetails"}
      className={ProductStyle["product-container"]}
    >
      <Image
        src={"/bai-ca-mung-giang-sinh.png"}
        layout="responsive"
        width={172}
        height={198}
        alt="Product image"
        style={{ alignSelf: "center", objectFit: "cover" }}
      />
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
    </Link>
  );
}

export default Product;
