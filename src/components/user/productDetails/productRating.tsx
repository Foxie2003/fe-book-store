import ProductDetailsStyle from "@/styles/user/user.productDetails.module.css";
import Image from "next/image";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

function ProductRating() {
  return (
    <div className={ProductDetailsStyle["product-rating-container"]}>
      {/* Title */}
      <div className={ProductDetailsStyle["product-rating-title"]}>
        Đánh giá sản phẩm
      </div>
      {/* Row */}
      <div className={ProductDetailsStyle["product-rating-row"]}>
        {/* Stars */}
        <div className={ProductDetailsStyle["product-rating-stars-container"]}>
          {/* Stars main */}
          <div className={ProductDetailsStyle["product-rating-stars-main"]}>
            <div
              className={ProductDetailsStyle["product-rating-stars-main-text"]}
            >
              <div style={{ fontSize: 40 }}>4.5</div>
              <div>/5</div>
            </div>
            <div>
              <FaStar size={24} color="#FF9500" />
              <FaStar size={24} color="#FF9500" />
              <FaStar size={24} color="#FF9500" />
              <FaStarHalfStroke size={24} color="#FF9500" />
              <FaRegStar size={24} color="#FF9500" />
            </div>
            <div
              className={ProductDetailsStyle["product-rating-stars-main-count"]}
            >
              (10 đánh giá)
            </div>
          </div>
          {/* Stars percentage */}
          <div
            className={ProductDetailsStyle["product-rating-stars-percentage"]}
          >
            {/* Row */}
            <div
              className={
                ProductDetailsStyle["product-rating-stars-percentage-row"]
              }
            >
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-star"]
                }
              >
                5 sao
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-bar"]
                }
              >
                <div
                  style={{ width: "100%" }}
                  className={
                    ProductDetailsStyle[
                      "product-rating-stars-percentage-inner-bar"
                    ]
                  }
                ></div>
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-text"]
                }
              >
                100%
              </div>
            </div>
            <div
              className={
                ProductDetailsStyle["product-rating-stars-percentage-row"]
              }
            >
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-star"]
                }
              >
                4 sao
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-bar"]
                }
              >
                <div
                  style={{ width: "75%" }}
                  className={
                    ProductDetailsStyle[
                      "product-rating-stars-percentage-inner-bar"
                    ]
                  }
                ></div>
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-text"]
                }
              >
                75%
              </div>
            </div>
            <div
              className={
                ProductDetailsStyle["product-rating-stars-percentage-row"]
              }
            >
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-star"]
                }
              >
                3 sao
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-bar"]
                }
              >
                <div
                  style={{ width: "50%" }}
                  className={
                    ProductDetailsStyle[
                      "product-rating-stars-percentage-inner-bar"
                    ]
                  }
                ></div>
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-text"]
                }
              >
                50%
              </div>
            </div>
            <div
              className={
                ProductDetailsStyle["product-rating-stars-percentage-row"]
              }
            >
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-star"]
                }
              >
                2 sao
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-bar"]
                }
              >
                <div
                  style={{ width: "25%" }}
                  className={
                    ProductDetailsStyle[
                      "product-rating-stars-percentage-inner-bar"
                    ]
                  }
                ></div>
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-text"]
                }
              >
                25%
              </div>
            </div>
            <div
              className={
                ProductDetailsStyle["product-rating-stars-percentage-row"]
              }
            >
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-star"]
                }
              >
                1 sao
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-bar"]
                }
              >
                <div
                  style={{ width: "0%" }}
                  className={
                    ProductDetailsStyle[
                      "product-rating-stars-percentage-inner-bar"
                    ]
                  }
                ></div>
              </div>
              <div
                className={
                  ProductDetailsStyle["product-rating-stars-percentage-text"]
                }
              >
                0%
              </div>
            </div>
          </div>
        </div>
        {/* Comments */}
        <div className={ProductDetailsStyle["product-comments-container"]}>
          {/* Comment item */}
          <div className={ProductDetailsStyle["product-comment-item"]}>
            <div className={ProductDetailsStyle["product-comment-item-info"]}>
              <Image
                src={"/user-avatar-1.png"}
                width={30}
                height={30}
                alt="user avatar"
                className={ProductDetailsStyle["product-comment-item-avatar"]}
              />
              <div>
                <div
                  className={ProductDetailsStyle["product-comment-item-name"]}
                >
                  Nguyễn Văn A
                </div>
                <div
                  className={ProductDetailsStyle["product-comment-item-stars"]}
                >
                  <FaStar size={10} color="#FF9500" />
                  <FaStar size={10} color="#FF9500" />
                  <FaStar size={10} color="#FF9500" />
                  <FaStarHalfStroke size={10} color="#FF9500" />
                  <FaRegStar size={10} color="#FF9500" />
                </div>
              </div>
            </div>
            <div
              className={ProductDetailsStyle["product-comment-item-comment"]}
            >
              Sản phẩm tốt, giao hàng nhanh, giá cả hợp lý!!!
            </div>
          </div>
          <div className={ProductDetailsStyle["product-comment-item"]}>
            <div className={ProductDetailsStyle["product-comment-item-info"]}>
              <Image
                src={"/user-avatar-1.png"}
                width={30}
                height={30}
                alt="user avatar"
                className={ProductDetailsStyle["product-comment-item-avatar"]}
              />
              <div>
                <div
                  className={ProductDetailsStyle["product-comment-item-name"]}
                >
                  Nguyễn Văn A
                </div>
                <div
                  className={ProductDetailsStyle["product-comment-item-stars"]}
                >
                  <FaStar size={10} color="#FF9500" />
                  <FaStar size={10} color="#FF9500" />
                  <FaStar size={10} color="#FF9500" />
                  <FaStarHalfStroke size={10} color="#FF9500" />
                  <FaRegStar size={10} color="#FF9500" />
                </div>
              </div>
            </div>
            <div
              className={ProductDetailsStyle["product-comment-item-comment"]}
            >
              Sản phẩm tốt, giao hàng nhanh, giá cả hợp lý!!!
            </div>
          </div>
          <div className={ProductDetailsStyle["product-comment-item"]}>
            <div className={ProductDetailsStyle["product-comment-item-info"]}>
              <Image
                src={"/user-avatar-1.png"}
                width={30}
                height={30}
                alt="user avatar"
                className={ProductDetailsStyle["product-comment-item-avatar"]}
              />
              <div>
                <div
                  className={ProductDetailsStyle["product-comment-item-name"]}
                >
                  Nguyễn Văn A
                </div>
                <div
                  className={ProductDetailsStyle["product-comment-item-stars"]}
                >
                  <FaStar size={10} color="#FF9500" />
                  <FaStar size={10} color="#FF9500" />
                  <FaStar size={10} color="#FF9500" />
                  <FaStarHalfStroke size={10} color="#FF9500" />
                  <FaRegStar size={10} color="#FF9500" />
                </div>
              </div>
            </div>
            <div
              className={ProductDetailsStyle["product-comment-item-comment"]}
            >
              Sản phẩm tốt, giao hàng nhanh, giá cả hợp lý!!!
            </div>
          </div>
          {/* Show more comments */}
          <div className={ProductDetailsStyle["product-comment-showMore"]}>
            Xem thêm phản hồi của khách hàng
          </div>
        </div>
      </div>
      {/* Write comment button */}
      <div className={ProductDetailsStyle["write-comment-button"]}>
        <Image
          src={"/write-comment-icon.png"}
          width={20}
          height={20}
          alt="icon"
        />
        <div className={ProductDetailsStyle["write-comment-button-text"]}>
          Viết bình luận của bạn
        </div>
      </div>
    </div>
  );
}

export default ProductRating;
