import CartStyle from "@/styles/user/user.cart.module.css";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa6";
import { BiSolidTrash } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";

function Cart() {
  return (
    <div className={CartStyle["cart-container"]}>
      {/* Cart left */}
      <div className={CartStyle["cart-left-container"]}>
        <div className={CartStyle["cart-product-header"]}>
          <Form
            style={{ marginTop: -5 }}
            className={CartStyle["cart-product-row-1"]}
          >
            <Form.Check type={"checkbox"} id={`check-api`}>
              <Form.Check.Input
                type={"checkbox"}
                isInvalid
                style={{ height: 25, width: 25 }}
              />
            </Form.Check>
          </Form>
          <div className={CartStyle["cart-product-row-2"]}>
            Chọn tất cả sản phẩm
          </div>
          <div className={CartStyle["cart-product-row-3"]}>Số lượng</div>
          <div className={CartStyle["cart-product-row-4"]}>Thành tiền</div>
        </div>
        <div className={CartStyle["cart-product-container"]}>
          <Form
            style={{ marginTop: -5 }}
            className={CartStyle["cart-product-row-1"]}
          >
            <Form.Check type={"checkbox"} id={`check-api`}>
              <Form.Check.Input
                type={"checkbox"}
                isInvalid
                style={{ height: 20, width: 20 }}
              />
            </Form.Check>
          </Form>
          <div
            className={`${CartStyle["cart-product"]} ${CartStyle["cart-product-row-2"]}`}
          >
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              width={90}
              height={90}
              alt="Product image"
            />
            <div className={CartStyle["cart-product-info"]}>
              <div className={CartStyle["cart-product-title"]}>
                Bài ca mùa giáng sinh
              </div>
              <div className={CartStyle["cart-product-author"]}>
                Charles Dickens
              </div>
              <div className={CartStyle["cart-product-price-container"]}>
                <div className={CartStyle["cart-product-price"]}>100.000 đ</div>
                <div className={CartStyle["cart-product-old-price"]}>
                  200.000 đ
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${CartStyle["product-count-container"]} ${CartStyle["cart-product-row-3"]}`}
          >
            <div className={CartStyle["product-count-buttons-container"]}>
              <div className={CartStyle["product-count-icon"]}>
                <FaMinus size={13} color="rgba(0, 0, 0, 0.3)" />
              </div>
              <div className={CartStyle["product-count-number"]}>0</div>
              <div className={CartStyle["product-count-icon"]}>
                <FaPlus size={13} color="rgba(0, 0, 0, 0.3)" />
              </div>
            </div>
          </div>
          <div
            className={`${CartStyle["cart-product-final-price"]} ${CartStyle["cart-product-row-4"]} `}
          >
            53.130 đ
          </div>
          <BiSolidTrash
            className={CartStyle["cart-product-delete-icon"]}
            size={25}
            color="rgba(0, 0, 0, 0.5)"
          />
        </div>
        <div className={CartStyle["cart-product-container"]}>
          <Form
            style={{ marginTop: -5 }}
            className={CartStyle["cart-product-row-1"]}
          >
            <Form.Check type={"checkbox"} id={`check-api`}>
              <Form.Check.Input
                type={"checkbox"}
                isInvalid
                style={{ height: 20, width: 20 }}
              />
            </Form.Check>
          </Form>
          <div
            className={`${CartStyle["cart-product"]} ${CartStyle["cart-product-row-2"]}`}
          >
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              width={90}
              height={90}
              alt="Product image"
            />
            <div className={CartStyle["cart-product-info"]}>
              <div className={CartStyle["cart-product-title"]}>
                Bài ca mùa giáng sinh
              </div>
              <div className={CartStyle["cart-product-author"]}>
                Charles Dickens
              </div>
              <div className={CartStyle["cart-product-price-container"]}>
                <div className={CartStyle["cart-product-price"]}>100.000 đ</div>
                <div className={CartStyle["cart-product-old-price"]}>
                  200.000 đ
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${CartStyle["product-count-container"]} ${CartStyle["cart-product-row-3"]}`}
          >
            <div className={CartStyle["product-count-buttons-container"]}>
              <div className={CartStyle["product-count-icon"]}>
                <FaMinus size={13} color="rgba(0, 0, 0, 0.3)" />
              </div>
              <div className={CartStyle["product-count-number"]}>0</div>
              <div className={CartStyle["product-count-icon"]}>
                <FaPlus size={13} color="rgba(0, 0, 0, 0.3)" />
              </div>
            </div>
          </div>
          <div
            className={`${CartStyle["cart-product-final-price"]} ${CartStyle["cart-product-row-4"]} `}
          >
            53.130 đ
          </div>
          <BiSolidTrash
            className={CartStyle["cart-product-delete-icon"]}
            size={25}
            color="rgba(0, 0, 0, 0.5)"
          />
        </div>
      </div>
      {/* Cart right */}
      <div className={CartStyle["cart-right-container"]}>
        <div className={CartStyle["cart-right-voucher-container"]}>
          <div className={CartStyle["cart-right-voucher-header"]}>
            <Image
              src={"/voucher-icon-3.png"}
              width={30}
              height={30}
              alt="icon"
            />
            <div className={CartStyle["cart-right-voucher-title"]}>
              KHUYẾN MÃI
            </div>
            <div className={CartStyle["cart-right-voucher-text-button"]}>
              Xem thêm
              <FaAngleRight size={10} />
            </div>
          </div>
          <div className={CartStyle["cart-right-voucher-body"]}>
            <div className={CartStyle["cart-right-voucher-body-row"]}>
              <div className={CartStyle["cart-right-voucher-body-bold-text"]}>
                MÃ GIẢM GIÁ - TOÀN BỘ SẢN PHẨM
              </div>
              <div className={CartStyle["cart-right-voucher-body-text-button"]}>
                Chi tiết
              </div>
            </div>
            <div className={CartStyle["cart-right-voucher-body-text"]}>
              Giảm cho đơn hàng từ 100k - Xem &quot;chi tiết&quot; để biết thêm
              thông tin về chương trình khuyển mãi
            </div>
            <div className={CartStyle["cart-right-voucher-body-row"]}>
              <div className={CartStyle["cart-right-voucher-body-bar"]}>
                <div
                  className={CartStyle["cart-right-voucher-body-bar-container"]}
                >
                  <div
                    className={CartStyle["cart-right-voucher-body-bar-value"]}
                  ></div>
                </div>
                <div className={CartStyle["cart-right-voucher-body-row"]}>
                  <div className={CartStyle["cart-right-voucher-body-text"]}>
                    Mua thêm 100.000 đ nhận mã giảm giá
                  </div>
                  <div className={CartStyle["cart-right-voucher-body-text"]}>
                    100k
                  </div>
                </div>
              </div>
              <div className={CartStyle["cart-right-voucher-body-button"]}>
                Mua tiếp
              </div>
            </div>
          </div>
          <div className={CartStyle["cart-right-voucher-footer"]}>
            <AiOutlineExclamationCircle size={20} color="#A0A0A0" />
            <div className={CartStyle["cart-right-voucher-footer-text"]}>
              Chỉ có thể áp dụng tối đa 1 mã giảm giá và 1 mã freeship
            </div>
          </div>
        </div>
        <div className={CartStyle["cart-right-price-container"]}>
          <div className={CartStyle["cart-right-price-header"]}>
            <div className={CartStyle["cart-right-price-title"]}>
              Thành tiền
            </div>
          </div>
          <div className={CartStyle["cart-right-price-body"]}>
            <div className={CartStyle["cart-right-price-body-row"]}>
              <div className={CartStyle["cart-right-price-body-text"]}>
                Tổng số tiền đơn hàng
              </div>
              <div className={CartStyle["cart-right-price-body-bold"]}>
                53.130 đ
              </div>
            </div>
            <div className={CartStyle["cart-right-price-body-row"]}>
              <div className={CartStyle["cart-right-price-body-text"]}>
                Sau khi áp dụng mã giảm giá
              </div>
              <div
                style={{ fontSize: 12 }}
                className={CartStyle["cart-right-price-body-bold"]}
              >
                0 đ
              </div>
            </div>
            <div className={CartStyle["cart-right-price-body-row"]}>
              <div className={CartStyle["cart-right-price-body-text"]}>
                Thành tiền
              </div>
              <div
                style={{ color: "#D10000" }}
                className={CartStyle["cart-right-price-body-bold"]}
              >
                53.130 đ
              </div>
            </div>
          </div>
          <Link href={"/user/payment"} style={{ textDecoration: "none" }}>
            <div className={CartStyle["cart-right-pay-button"]}>Thanh toán</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
