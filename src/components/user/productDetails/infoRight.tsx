import Image from "next/image";
import ProductDetailsStyle from "@/styles/user/user.productDetails.module.css";
import {
  FaRegStar,
  FaStar,
  FaStarHalfStroke,
  FaAngleRight,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";

function InfoRight() {
  return (
    <>
      {/* Info Right */}
      <div className={ProductDetailsStyle["info-right-container"]}>
        {/* Product main details */}
        <div className={ProductDetailsStyle["product-main-details-container"]}>
          {/* Book name */}
          <div className={ProductDetailsStyle["product-main-details-name"]}>
            Bài Ca Mừng Giáng Sinh
          </div>
          {/* Book details */}
          <div
            className={
              ProductDetailsStyle["product-main-details-rows-container"]
            }
          >
            <div
              className={
                ProductDetailsStyle["product-main-details-row-container"]
              }
            >
              <div className={ProductDetailsStyle["product-main-details-row"]}>
                <div
                  className={ProductDetailsStyle["product-main-details-title"]}
                >
                  Nhà cung cấp:
                </div>
                <div
                  className={ProductDetailsStyle["product-main-details-des"]}
                >
                  Đinh Tị
                </div>
              </div>
              <div className={ProductDetailsStyle["product-main-details-row"]}>
                <div
                  className={ProductDetailsStyle["product-main-details-title"]}
                >
                  Nhà xuất bản:
                </div>
                <div
                  className={ProductDetailsStyle["product-main-details-des"]}
                >
                  Văn học
                </div>
              </div>
            </div>
            <div
              className={
                ProductDetailsStyle["product-main-details-row-container"]
              }
            >
              <div className={ProductDetailsStyle["product-main-details-row"]}>
                <div
                  className={ProductDetailsStyle["product-main-details-title"]}
                >
                  Tên tác giả:
                </div>
                <div
                  className={ProductDetailsStyle["product-main-details-des"]}
                >
                  Charles Dickens
                </div>
              </div>
              <div className={ProductDetailsStyle["product-main-details-row"]}>
                <div
                  className={ProductDetailsStyle["product-main-details-title"]}
                >
                  Hình thức bìa:
                </div>
                <div
                  className={ProductDetailsStyle["product-main-details-des"]}
                >
                  Bìa mềm
                </div>
              </div>
            </div>
          </div>
          {/* Rating and sale number */}
          <div className={ProductDetailsStyle["rating-and-sale-container"]}>
            <div className={ProductDetailsStyle["rating-container"]}>
              <div className={ProductDetailsStyle["rating-star-container"]}>
                <FaStar size={15} color="#FF9500" />
                <FaStar size={15} color="#FF9500" />
                <FaStar size={15} color="#FF9500" />
                <FaStarHalfStroke size={15} color="#FF9500" />
                <FaRegStar size={15} color="#FF9500" />
              </div>
              <div className={ProductDetailsStyle["rating-count-container"]}>
                (10 đánh giá)
              </div>
            </div>
            <div
              className={ProductDetailsStyle["rating-and-sale-border"]}
            ></div>
            <div className={ProductDetailsStyle["sale-container"]}>
              <div className={ProductDetailsStyle["sale-text"]}>Đã bán:</div>
              <div className={ProductDetailsStyle["sale-number"]}>2.3k</div>
            </div>
          </div>
          {/* Price */}
          <div className={ProductDetailsStyle["price-container"]}>
            <div className={ProductDetailsStyle["price"]}>100.000 đ</div>
            <div className={ProductDetailsStyle["old-price"]}>200.000 đ</div>
            <div className={ProductDetailsStyle["sale-percent"]}>-50%</div>
          </div>
        </div>
        {/* Transport details */}
        <div className={ProductDetailsStyle["transport-details-container"]}>
          {/* Title */}
          <div className={ProductDetailsStyle["transport-details-title"]}>
            Thông tin vận chuyển
          </div>
          {/* Transport details */}
          <div className={ProductDetailsStyle["transport-details-row"]}>
            <Image
              src={"/policy-icon-1.png"}
              width={20}
              height={20}
              alt="icon"
            />
            <div className={ProductDetailsStyle["transport-details-row-info"]}>
              Đường Nguyễn Phong Sắc, Cầu Giấy, Hà Nội
            </div>
            <div
              className={ProductDetailsStyle["transport-details-border"]}
            ></div>
            <div
              className={ProductDetailsStyle["transport-details-text-button"]}
            >
              Thay đổi
            </div>
          </div>
          <div className={ProductDetailsStyle["transport-details-row"]}>
            <Image
              src={"/policy-icon-1.png"}
              width={20}
              height={20}
              alt="icon"
            />
            <div className={ProductDetailsStyle["transport-details-row-info"]}>
              Đơn hàng dự kiến được giao vào
            </div>
            <div
              className={ProductDetailsStyle["transport-details-row-info-bold"]}
            >
              Thứ Bảy - 7/12
            </div>
          </div>
          {/* Vouchers */}
          <div className={ProductDetailsStyle["voucher-container"]}>
            <div className={ProductDetailsStyle["voucher-title-container"]}>
              <div className={ProductDetailsStyle["voucher-title"]}>
                Ưu đãi khách hàng
              </div>
              <div className={ProductDetailsStyle["voucher-text-button"]}>
                Xem thêm <FaAngleRight size={13} />
              </div>
            </div>
            <div className={ProductDetailsStyle["voucher-row"]}>
              <div className={ProductDetailsStyle["voucher-row-item"]}>
                <Image
                  src={"/policy-icon-1.png"}
                  width={24}
                  height={24}
                  alt="icon"
                />
                <div className={ProductDetailsStyle["voucher-row-item-text"]}>
                  Mã giảm 10.000 đ
                </div>
              </div>
              <div className={ProductDetailsStyle["voucher-row-item"]}>
                <Image
                  src={"/policy-icon-1.png"}
                  width={24}
                  height={24}
                  alt="icon"
                />
                <div className={ProductDetailsStyle["voucher-row-item-text"]}>
                  Mã giảm 10.000 đ
                </div>
              </div>
              <div className={ProductDetailsStyle["voucher-row-item"]}>
                <Image
                  src={"/policy-icon-1.png"}
                  width={24}
                  height={24}
                  alt="icon"
                />
                <div className={ProductDetailsStyle["voucher-row-item-text"]}>
                  Mã giảm 10.000 đ
                </div>
              </div>
            </div>
          </div>
          {/* Product count */}
          <div className={ProductDetailsStyle["product-count-container"]}>
            <div className={ProductDetailsStyle["product-count-title"]}>
              Số lượng :
            </div>
            <div
              className={ProductDetailsStyle["product-count-buttons-container"]}
            >
              <div className={ProductDetailsStyle["product-count-icon"]}>
                <FaMinus size={24} color="rgba(0, 0, 0, 0.3)" />
              </div>
              <div className={ProductDetailsStyle["product-count-number"]}>
                0
              </div>
              <div className={ProductDetailsStyle["product-count-icon"]}>
                <FaPlus size={24} color="rgba(0, 0, 0, 0.3)" />
              </div>
            </div>
          </div>
        </div>
        {/* More details */}
        <div className={ProductDetailsStyle["more-details-container"]}>
          {/* Title */}
          <div className={ProductDetailsStyle["more-details-title"]}>
            Thông tin chi tiết
          </div>
          {/* Info */}
          <div className={ProductDetailsStyle["more-details-info"]}>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Mã sách
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                8935212365291
              </div>
            </div>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Tác giả
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                Charles Dickens, Arthur Rackham
              </div>
            </div>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Nhà xuất bản
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                Văn học
              </div>
            </div>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Nhà cung cấp
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                Đinh Tị
              </div>
            </div>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Hình thức
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                Bìa mềm
              </div>
            </div>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Số lượng
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                300
              </div>
            </div>
            <div className={ProductDetailsStyle["more-details-info-row"]}>
              <div className={ProductDetailsStyle["more-details-info-title"]}>
                Năm xuất bản
              </div>
              <div className={ProductDetailsStyle["more-details-info-des"]}>
                2024
              </div>
            </div>
          </div>
          {/* Other Info */}
          <div className={ProductDetailsStyle["more-details-other-info-row"]}>
            <div
              className={ProductDetailsStyle["more-details-other-info-title"]}
            >
              Sản phẩm bán chạy nhất
            </div>
            <div
              className={
                ProductDetailsStyle["more-details-other-info-clickable"]
              }
            >
              Sản phẩm thuộc top 100 sách Văn học bán chạy nhất trong tháng
            </div>
          </div>
          <div className={ProductDetailsStyle["more-details-other-info"]}>
            Giá sản phẩm trên BNP BOOKS đã bao gồm thuế theo luật hiện hành. Bên
            cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có
            thể phát sinh thêm chi phí khác như: Phụ phí đóng gói, phí vận
            chuyển, phụ phí hàng cồng kềnh,...
          </div>
          <div className={ProductDetailsStyle["more-details-other-info-note"]}>
            Chính sách khuyến mãi trên BNP BOOKS không áp dụng cho Hệ thống nhà
            sách trên toàn quốc
          </div>
        </div>
        {/* Product description */}
        <div className={ProductDetailsStyle["product-des-container"]}>
          {/* Title */}
          <div className={ProductDetailsStyle["product-des-title"]}>
            Mô tả sản phẩm
          </div>
          {/* Description */}
          <div className={ProductDetailsStyle["product-des-bold-text"]}>
            Bài ca mùa giáng sinh
          </div>
          <div className={ProductDetailsStyle["product-des-text"]}>
            Câu chuyện mở đầu bằng hình ảnh Ebenezer Scrooge - một người đàn ông
            nghiệt ngã và keo kiệt. Đối với lão, Giáng sinh chỉ là một ngày như
            bao ngày khác, thậm chí Giáng sinh còn là thứ gì đó &quot;đáng
            nguyền rủa&quot;. Lão xỉa xói người phụ tá Bob Cratchit trung thành
            vì &quot;dám&quot; xin nghỉ lễ Giáng sinh những một ngày. Lão đuổi
            thẳng cổ đứa cháu trai Fred tốt bụng ra khỏi cửa vì &quot;dám&quot;
            chúc lão Giáng sinh vui vẻ và mời lão đến nhà dùng bữa. Rõ ràng
            Scrooge chẳng có ý định tận hưởng mùa lễ, và đêm nay - đêm trước
            Giáng sinh - thì vẫn như mọi khi, lão về lại căn nhà tối tăm, u ám
            của lão một mình. Nhưng tất cả đã thay đổi khi hồn ma đối tác kinh
            doanh đã chết từ lâu của lão xuất hiện, cảnh báo Scrooge hãy thay
            đổi thái độ với cuộc sống trước khi quá muộn...
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoRight;
