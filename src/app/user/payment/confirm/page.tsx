import PaymentStyle from "@/styles/user/user.payment.module.css";
import Image from "next/image";

function PaymentConfirmPage() {
  return (
    <div className={PaymentStyle["payment-container"]}>
      {/* Payment header */}
      <div className={PaymentStyle["payment-header"]} style={{ width: "100%" }}>
        <div className={PaymentStyle["payment-header-title"]}>
          XÁC NHẬN THANH TOÁN
        </div>
        <div className={PaymentStyle["payment-header-des"]}>
          Vui lòng hoàn thành việc thanh toán thông qua ví điện tử mà bạn đã
          chọn cho đơn hàng của bạn để BNP BOOKS giao hàng nhanh chóng đến bạn
          nhé!!!
        </div>
      </div>
      {/* Payment body */}
      <div className={PaymentStyle["payment-body"]}>
        <div className={PaymentStyle["payment-confirm"]}>
          <div className={PaymentStyle["payment-confirm-bold"]}>
            Quét mã QR dưới đây bằng ví điện tử Zalopay để tiến hành thanh toán
          </div>
          <Image src={"/qr-code.png"} width={250} height={250} alt="qr" />
          <div className={PaymentStyle["payment-confirm-text"]}>
            Lưu ý: Mã QR chỉ tồn tại trong 5 phút. Vui lòng hoàn tất thanh toán
            qua Zalopay trong 5 phút
          </div>
          <div className={PaymentStyle["payment-confirm-text"]}>
            Sau khi thanh toán nhấp vào nút bên dưới để kiểm tra
          </div>
          <div className={PaymentStyle["payment-confirm-button"]}>
            Hoàn tất thanh toán
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmPage;
