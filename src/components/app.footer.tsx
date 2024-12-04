import FooterStyle from "@/styles/footer.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import bocongthuong from "../../public/bocongthuong.png";
import facebook from "../../public/facebook.png";
import ggplus from "../../public/ggplus.png";
import instagram from "../../public/instagram.png";
import pinterest from "../../public/pinterest.png";
import xbox from "../../public/xbox.png";
import googleplay from "../../public/googleplay.png";
import appstore from "../../public/appstore.png";
import location from "../../public/icon-location.png";
import email from "../../public/icon-email.png";
import phone from "../../public/icon-phone.png";
import vnpay from "../../public/vnpay.png";
import momo from "../../public/momo.png";
import shopee from "../../public/shopee.png";

function FooterComponent() {
  return (
    <div className={FooterStyle["footer-container"]}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={FooterStyle["footer-row"]}>
          <Image src={logo} style={{ width: "100%", height: 130 }} alt="logo" />
          <p style={{ fontSize: 13 }}>
            BNP BOOKS nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ
            trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ
            Thống BNP BOOKS trên toàn quốc.
          </p>
          <Image src={bocongthuong} alt="logo" />
          <div style={{ marginTop: 15 }}>
            <Image src={facebook} alt="logo" />
            <Image src={ggplus} alt="logo" />
            <Image src={instagram} alt="logo" />
            <Image src={pinterest} alt="logo" />
            <Image src={xbox} alt="logo" />
          </div>
          <div style={{ marginTop: 15 }}>
            <Image src={googleplay} alt="logo" style={{ marginRight: 8 }} />
            <Image src={appstore} alt="logo" />
          </div>
        </div>
        <div className={FooterStyle["footer-small-container"]}>
          <div style={{ display: "flex" }}>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li className={FooterStyle["footer-list-header"]}>DỊCH VỤ</li>
                <li className={FooterStyle["footer-list-item"]}>
                  Điều khoản sử dụng
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chính sách bảo mật thông tin cá nhân
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chính sách bảo mật thanh toán
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Giới thiệu BNP BOOKS
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Hệ thống trung tâm - Nhà sách
                </li>
              </ul>
            </div>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li className={FooterStyle["footer-list-header"]}>HỖ TRỢ</li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chính sách đổi - trả - hoàn tiền
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chính sách bảo hành - bồi hoàn
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chính sách vận chuyển
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chính sách khách sỉ
                </li>
              </ul>
            </div>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li className={FooterStyle["footer-list-header"]}>
                  TÀI KHOẢN CỦA TÔI
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Đăng nhập/Tạo tài khoản mới
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Thay đổi địa chỉ khách khàng
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Chi tiết tài khoản
                </li>
                <li className={FooterStyle["footer-list-item"]}>
                  Lịch sử mua hàng
                </li>
              </ul>
            </div>
          </div>
          <ul style={{ listStyle: "none" }}>
            <li className={FooterStyle["footer-list-header"]}>LIÊN HỆ</li>
          </ul>
          <div style={{ display: "flex" }}>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li
                  className={FooterStyle["footer-list-item"]}
                  style={{ margin: -10 }}
                >
                  <Image src={location} alt="logo" style={{ marginLeft: 8 }} />
                  Nguyễn Phong Sắc, Cầu Giấy, Hà Nội
                </li>
              </ul>
            </div>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li className={FooterStyle["footer-list-header"]}></li>
                <li
                  className={FooterStyle["footer-list-item"]}
                  style={{ margin: -10 }}
                >
                  <Image src={email} alt="logo" style={{ marginLeft: 8 }} />
                  bnp.studio2003@gmail.com
                </li>
              </ul>
            </div>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li
                  className={FooterStyle["footer-list-item"]}
                  style={{ margin: -10 }}
                >
                  <Image src={phone} alt="logo" style={{ marginLeft: 8 }} />
                  0936771257
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li
                  className={FooterStyle["footer-list-item"]}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image src={vnpay} alt="logo" />
                </li>
              </ul>
            </div>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li className={FooterStyle["footer-list-header"]}></li>
                <li
                  className={FooterStyle["footer-list-item"]}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image src={momo} alt="logo" />
                </li>
              </ul>
            </div>
            <div className={FooterStyle["footer-small-row"]}>
              <ul style={{ listStyle: "none" }}>
                <li
                  className={FooterStyle["footer-list-item"]}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image src={shopee} alt="logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={FooterStyle["footer-copyright"]}>
        Bản quyền thuộc về BNP Studio
      </div>
    </div>
  );
}

export default FooterComponent;
