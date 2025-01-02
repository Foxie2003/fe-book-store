import PaymentStyle from "@/styles/user/user.payment.module.css";
import CartStyle from "@/styles/user/user.cart.module.css";
import Image from "next/image";
import { Form } from "react-bootstrap";

function BillInfo() {
  return (
    <div className={PaymentStyle["bill-info"]}>
      <div className={PaymentStyle["bill-info-header"]}>ĐƠN HÀNG CỦA BẠN</div>
      <div className={PaymentStyle["bill-info-body"]}>
        <div className={PaymentStyle["bill-info-body-row"]}>
          <div className={PaymentStyle["bill-info-label"]}>Sản phẩm</div>
          <div className={PaymentStyle["bill-info-label"]}>Tạm tính</div>
        </div>
        <div className={PaymentStyle["bill-info-body-row"]}>
          <div className={`${CartStyle["cart-product"]}`}>
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
              <div className={CartStyle["cart-product-author"]}>
                Số lượng: 2
              </div>
            </div>
          </div>
          <div className={PaymentStyle["bill-info-price"]}>106.260đ</div>
        </div>
        <div className={PaymentStyle["bill-info-body-row"]}>
          <div className={PaymentStyle["bill-info-label"]}>Tạm tính</div>
          <div className={PaymentStyle["bill-info-price"]}>106.260đ</div>
        </div>
        <div className={PaymentStyle["bill-info-body-row"]}>
          <div className={PaymentStyle["bill-info-label"]}>
            Sau khi áp dụng mã giảm giá
          </div>
          <div className={PaymentStyle["bill-info-price"]}>10.000đ</div>
        </div>
        <div className={PaymentStyle["bill-info-body-row"]}>
          <div className={PaymentStyle["bill-info-label"]}>Tổng tiền</div>
          <div className={PaymentStyle["bill-info-price"]}>96.260đ</div>
        </div>
        <Form className={PaymentStyle["payment-form"]}>
          <Form.Check
            className={PaymentStyle["custom-radio"]}
            label="Chuyển khoản ngân hàng"
            name="group1"
            type={"radio"}
            id={`radio-1`}
          />
          <div className={PaymentStyle["payment-form-radios-container"]}>
            <Form.Check
              className={`${PaymentStyle["custom-radio"]} ${PaymentStyle["custom-radio-small"]}`}
              label={
                <Image
                  layout="responsive"
                  src={"/icon-zalopay.png"}
                  width={115}
                  height={30}
                  alt="icon"
                />
              }
              name="group2"
              type={"radio"}
              id={`radio-1`}
            />
            <Form.Check
              className={`${PaymentStyle["custom-radio"]} ${PaymentStyle["custom-radio-small"]}`}
              label={
                <Image
                  layout="responsive"
                  src={"/icon-vnpay.png"}
                  width={93}
                  height={30}
                  alt="icon"
                />
              }
              name="group2"
              type={"radio"}
              id={`radio-1`}
            />
            <Form.Check
              className={`${PaymentStyle["custom-radio"]} ${PaymentStyle["custom-radio-small"]}`}
              label={
                <Image
                  layout="responsive"
                  src={"/icon-shopeepay.png"}
                  width={100}
                  height={30}
                  alt="icon"
                />
              }
              name="group2"
              type={"radio"}
              id={`radio-1`}
            />
          </div>
          <div className={PaymentStyle["payment-form-des"]}>
            Thực hiện việc thanh toán hóa đơn thông qua ví điện tử của bạn .Đơn
            hàng sẽ được giao sau khi bạn thực hiện thành công việc thanh toán.
          </div>
          <Form.Check
            className={PaymentStyle["custom-radio"]}
            label="Trả tiền mặt khi nhận hàng"
            name="group1"
            type={"radio"}
            id={`radio-2`}
          />
          <div className={PaymentStyle["payment-form-button"]}>Đặt hàng</div>
        </Form>
      </div>
    </div>
  );
}

export default BillInfo;
