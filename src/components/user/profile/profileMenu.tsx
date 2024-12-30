import ProfileStyle from "@/styles/user/user.profile.module.css";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown, FaMoneyBill } from "react-icons/fa6";

function ProfileMenu() {
  return (
    <div className={ProfileStyle["profile-menu-container"]}>
      <div className={ProfileStyle["profile-menu-info-container"]}>
        <Image
          src={"/user-avatar-1.png"}
          width={60}
          height={60}
          alt="avatar"
          style={{ borderRadius: 1000 }}
        />
        <div className={ProfileStyle["profile-menu-info-name"]}>Nam</div>
        <div className={ProfileStyle["profile-menu-info-email"]}>
          nam123@gmail.com
        </div>
      </div>
      <div className={ProfileStyle["profile-menu"]}>
        <div>
          <div className={ProfileStyle["profile-menu-item"]}>
            <div>
              <FaUserAlt size={20} />
            </div>
            <div>Thông tin tài khoản</div>
            <div>
              <FaAngleDown size={15} />
            </div>
          </div>
          <div className={ProfileStyle["profile-sub-menu"]}>
            <div className={ProfileStyle["profile-sub-menu-item"]}>
              Hồ sơ cá nhân
            </div>
            <div className={ProfileStyle["profile-sub-menu-item"]}>Địa chỉ</div>
            <div className={ProfileStyle["profile-sub-menu-item"]}>
              Đổi mật khẩu
            </div>
          </div>
        </div>
        <div className={ProfileStyle["profile-menu-item"]}>
          <div>
            <FaMoneyBill size={20} />
          </div>
          <div>Đơn hàng của bạn</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
