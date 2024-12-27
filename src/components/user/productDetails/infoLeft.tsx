import Image from "next/image";
import ProductDetailsStyle from "@/styles/user/user.productDetails.module.css";
import { FaCartShopping } from "react-icons/fa6";

function InfoLeft() {
  return (
    <>
      {/* Info Left */}
      <div className={ProductDetailsStyle["info-left-container"]}>
        {/* Images */}
        <div className={ProductDetailsStyle["info-left-main-image"]}>
          <Image
            src={"/bai-ca-mung-giang-sinh.png"}
            width={330}
            height={330}
            alt="Product image"
          />
        </div>
        <div className={ProductDetailsStyle["info-left-image-row"]}>
          <div className={ProductDetailsStyle["info-left-image-row-image"]}>
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              style={{ objectFit: "cover" }}
              width={80}
              height={110}
              alt="Product image"
            />
          </div>
          <div className={ProductDetailsStyle["info-left-image-row-image"]}>
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              style={{ objectFit: "cover" }}
              width={80}
              height={110}
              alt="Product image"
            />
          </div>
          <div className={ProductDetailsStyle["info-left-image-row-image"]}>
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              style={{ objectFit: "cover" }}
              width={80}
              height={110}
              alt="Product image"
            />
          </div>
          <div className={ProductDetailsStyle["info-left-image-row-image"]}>
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              style={{ objectFit: "cover" }}
              width={80}
              height={110}
              alt="Product image"
            />
          </div>
          <div className={ProductDetailsStyle["info-left-image-row-image"]}>
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              style={{ objectFit: "cover" }}
              width={80}
              height={110}
              alt="Product image"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className={ProductDetailsStyle["info-left-buttons-container"]}>
          <div className={ProductDetailsStyle["info-left-addToCart-button"]}>
            <div className={ProductDetailsStyle["info-left-addToCart-icon"]}>
              <FaCartShopping size={24} color="#D10000" />
            </div>
            <div className={ProductDetailsStyle["info-left-addToCart-text"]}>
              Thêm vào vào giỏ hàng
            </div>
          </div>
          <div className={ProductDetailsStyle["info-left-buyNow-button"]}>
            <div className={ProductDetailsStyle["info-left-buyNow-text"]}>
              Mua ngay
            </div>
          </div>
        </div>

        {/* Policy */}
        <div className={ProductDetailsStyle["info-left-policy-container"]}>
          <div className={ProductDetailsStyle["info-left-policy-header"]}>
            Chính sách ưu đãi của BNP BOOKS
          </div>
          <div
            className={ProductDetailsStyle["info-left-policy-item-container"]}
          >
            <Image
              src={"/policy-icon-1.png"}
              width={20}
              height={20}
              alt="icon"
            />
            <div className={ProductDetailsStyle["info-left-policy-item-title"]}>
              Thời gian giao hàng:
            </div>
            <div className={ProductDetailsStyle["info-left-policy-item-des"]}>
              Nhanh chóng và luôn đặt uy tín lên hàng đầu
            </div>
          </div>
          <div
            className={ProductDetailsStyle["info-left-policy-item-container"]}
          >
            <Image
              src={"/policy-icon-2.png"}
              width={20}
              height={20}
              alt="icon"
            />
            <div className={ProductDetailsStyle["info-left-policy-item-title"]}>
              Chính sách đổi trả hàng:
            </div>
            <div className={ProductDetailsStyle["info-left-policy-item-des"]}>
              Đổi trả hàng miễn phí trên toàn quốc
            </div>
          </div>
          <div
            className={ProductDetailsStyle["info-left-policy-item-container"]}
          >
            <Image
              src={"/policy-icon-3.png"}
              width={20}
              height={20}
              alt="icon"
            />
            <div className={ProductDetailsStyle["info-left-policy-item-title"]}>
              Chính sách khách sỉ:
            </div>
            <div className={ProductDetailsStyle["info-left-policy-item-des"]}>
              Ữu đãi cho khách hàng khi đặt số lượng lớn
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoLeft;
