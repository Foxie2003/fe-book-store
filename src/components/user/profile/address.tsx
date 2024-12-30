"use client";
import ProfileStyle from "@/styles/user/user.profile.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";

function Address() {
  const router = useRouter();
  return (
    <div className={ProfileStyle["profile-right-container"]}>
      <div className={ProfileStyle["profile-right-header"]}>Hồ sơ cá nhân</div>
      <div className={ProfileStyle["profile-right-body"]}>
        <Image
          src={"/user-avatar-1.png"}
          width={80}
          height={80}
          alt="avatar"
          style={{ borderRadius: 1000 }}
        />
        <Form className={ProfileStyle["profile-right-form"]}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Tên người nhận
            </Form.Label>
            <Form.Control
              className={ProfileStyle["profile-right-input"]}
              type="text"
              placeholder="Nhập tên người nhận"
            />
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Số điện thoại
            </Form.Label>
            <Form.Control
              className={ProfileStyle["profile-right-input"]}
              type="text"
              placeholder="Nhập số điện thoại"
            />
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Tỉnh/Thành Phố
            </Form.Label>
            <Form.Select className={ProfileStyle["profile-right-input"]}>
              <option>Chọn tỉnh/thành Phố</option>
            </Form.Select>
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Quận/Huyện
            </Form.Label>
            <Form.Select className={ProfileStyle["profile-right-input"]}>
              <option>Chọn quận/huyện</option>
            </Form.Select>
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Xã/Phường
            </Form.Label>
            <Form.Select className={ProfileStyle["profile-right-input"]}>
              <option>Chọn xã/phường</option>
            </Form.Select>
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Địa chỉ cụ thể
            </Form.Label>
            <Form.Control
              className={ProfileStyle["profile-right-input"]}
              type="text"
              placeholder="Nhập địa chỉ cụ thể"
            />
          </Form.Group>
          <Button
            className={ProfileStyle["profile-right-button"]}
            variant="danger"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              router.push("/user");
            }}
          >
            Lưu thay đổi
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Address;
