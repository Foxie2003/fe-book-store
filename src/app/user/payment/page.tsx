import BillInfo from "@/components/user/payment/billInfo";
import PaymentInfo from "@/components/user/payment/paymentInfo";
import PaymentStyle from "@/styles/user/user.payment.module.css";

function PaymentPage() {
  return (
    <div className={PaymentStyle["payment-container"]}>
      {/* Payment header */}
      <div className={PaymentStyle["payment-header"]}>
        <div className={PaymentStyle["payment-header-title"]}>Thanh toán</div>
        <div className={PaymentStyle["payment-header-des"]}>
          Vui lòng nhập đầy đủ thông tin và kiểm tra lại đơn hàng của bạn để BNP
          BOOKS giao hàng nhanh chóng đến bạn nhé!!!
        </div>
      </div>
      {/* Payment body */}
      <div className={PaymentStyle["payment-body"]}>
        <PaymentInfo />
        <BillInfo />
      </div>
    </div>
  );
}

export default PaymentPage;
