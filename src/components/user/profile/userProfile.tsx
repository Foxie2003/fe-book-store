"use client";
import ProfileStyle from "@/styles/user/user.profile.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";

function UserProfile() {
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
              Tên người dùng
            </Form.Label>
            <Form.Control
              className={ProfileStyle["profile-right-input"]}
              type="text"
              placeholder="Nhập tên"
            />
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Email
            </Form.Label>
            <Form.Control
              className={ProfileStyle["profile-right-input"]}
              type="email"
              placeholder="Nhập email"
            />
            <Form.Label className={ProfileStyle["profile-right-label"]}>
              Số điện thoại
            </Form.Label>
            <Form.Control
              className={ProfileStyle["profile-right-input"]}
              type="text"
              placeholder="Nhập số điện thoại"
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

export default UserProfile;
