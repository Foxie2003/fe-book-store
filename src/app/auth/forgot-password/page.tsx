"use client";
import LoginStyle from "@/styles/login/login.module.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";

function ForgotPasswordPage() {
  const router = useRouter();
  return (
    <div className={LoginStyle["forgot-password-container"]}>
      <Image
        src={"/logo.png"}
        width={225}
        height={80}
        alt="logo"
        style={{ objectFit: "cover" }}
      />
      <div className={LoginStyle["forgot-password-form-title"]}>
        <div>Lấy lại mật khẩu</div>
        <div className={LoginStyle["forgot-password-form-des"]}>
          Nhập địa chỉ email đã đăng ký tại BNP BOOKS để lấy lại mật khẩu
        </div>
      </div>
      <Form className={LoginStyle["forgot-password-form-container"]}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className={LoginStyle["login-form-input"]}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <div
          style={{ textAlign: "left" }}
          className={LoginStyle["login-form-text"]}
        >
          <Link href={"#"} className={LoginStyle["login-form-link"]}>
            Quay lại trang đăng nhập
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            className={LoginStyle["login-form-button"]}
            variant="danger"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              router.push("/user");
            }}
          >
            Xác nhận
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ForgotPasswordPage;
