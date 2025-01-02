"use client";
import PaymentStyle from "@/styles/user/user.payment.module.css";
import { Form } from "react-bootstrap";

function PaymentInfo() {
  return (
    <div className={PaymentStyle["payment-info"]}>
      <div className={PaymentStyle["payment-info-header"]}>
        THÔNG TIN THANH TOÁN
      </div>
      <Form className={PaymentStyle["payment-info-body"]}>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Họ tên người nhận *
          </Form.Label>
          <Form.Control
            className={PaymentStyle["payment-info-input"]}
            type="text"
            placeholder="Nhập họ và tên"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Số điện thoại *
          </Form.Label>
          <Form.Control
            className={PaymentStyle["payment-info-input"]}
            type="number"
            placeholder="Nhập số điện thoại"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Địa chỉ email *
          </Form.Label>
          <Form.Control
            className={PaymentStyle["payment-info-input"]}
            type="email"
            placeholder="Nhập địa chỉ email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Tỉnh/Thành phố *
          </Form.Label>
          <Form.Select className={PaymentStyle["payment-info-input"]}>
            <option>Chọn tỉnh/thành phố</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Quận/Huyện *
          </Form.Label>
          <Form.Select className={PaymentStyle["payment-info-input"]}>
            <option>Chọn quận/huyện</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Phường/Xã *
          </Form.Label>
          <Form.Select className={PaymentStyle["payment-info-input"]}>
            <option>Chọn phường/xã</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Địa chỉ nhận hàng *
          </Form.Label>
          <Form.Control
            className={PaymentStyle["payment-info-input"]}
            type="text"
            placeholder="VD: số 30, ngõ 43, Nguyễn Phong Sắc,..."
          />
        </Form.Group>
      </Form>
      <div className={PaymentStyle["payment-info-header"]}>
        THÔNG TIN THANH TOÁN
      </div>
      <Form>
        <Form.Group>
          <Form.Label className={PaymentStyle["payment-info-label"]}>
            Ghi chú đơn hàng (tùy chọn)
          </Form.Label>
          <Form.Control
            className={PaymentStyle["payment-info-input"]}
            as="textarea"
            placeholder="Thêm lời nhắn cho đơn hàng của bạn, ví dụ: thời gian hay những chỉ dẫn tới địa chỉ giao hàng chi tiết hơn."
            rows={5}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default PaymentInfo;
