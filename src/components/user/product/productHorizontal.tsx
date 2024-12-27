import ProductStyle from "@/styles/user/user.product.module.css";
import Image from "next/image";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

function ProductHorizontal() {
  return (
    <div className={ProductStyle["product-horizontal-container"]}>
      <Image
        src={"/bai-ca-mung-giang-sinh.png"}
        width={118}
        height={118}
        alt="Product image"
      />
      <div className={ProductStyle["product-horizontal-info"]}>
        <div className={ProductStyle["product-horizontal-title"]}>
          Tên sản phẩm
        </div>
        <div className={ProductStyle["product-horizontal-author"]}>Tác giả</div>
        <div className={ProductStyle["product-horizontal-price"]}>
          100.000 đ
        </div>
        <div className={ProductStyle["product-horizontal-price-container"]}>
          <div className={ProductStyle["product-horizontal-old-price"]}>
            200.000 đ
          </div>
          <div className={ProductStyle["product-horizontal-sale-percent"]}>
            -50%
          </div>
        </div>
        <div className={ProductStyle["product-horizontal-review"]}>
          <div className={ProductStyle["product-horizontal-review-text"]}>
            Đánh giá:
          </div>
          <div className={ProductStyle["product-horizontal-stars"]}>
            <FaStar size={15} color="#FF9500" />
            <FaStar size={15} color="#FF9500" />
            <FaStar size={15} color="#FF9500" />
            <FaStarHalfStroke size={15} color="#FF9500" />
            <FaRegStar size={15} color="#FF9500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHorizontal;
