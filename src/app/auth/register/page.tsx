"use client";

import FooterComponent from "@/components/admin/app.footer";
import HeaderComponent from "@/components/login/login.header";
import loginStyle from "@/styles/login/login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <>
      <HeaderComponent title="ĐĂNG KÝ" />
      <div className={loginStyle["login-container"]}>
        <Form className={loginStyle["login-form-container"]}>
          <h2 className={loginStyle["login-form-title"]}>Đăng ký</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="email"
              placeholder="Email"
            />
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="text"
              placeholder="Tên người dùng"
            />
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="text"
              placeholder="Số điện thoại"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="password"
              placeholder="Mật khẩu"
            />
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              className={loginStyle["login-form-button"]}
              variant="danger"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                router.push("/user");
              }}
            >
              Đăng ký
            </Button>
          </div>
          <div
            style={{ textAlign: "center" }}
            className={loginStyle["login-form-text"]}
          >
            Bạn đã có tài khoản?{" "}
            <Link href={"#"} className={loginStyle["login-form-link"]}>
              Đăng nhập
            </Link>
          </div>
        </Form>
      </div>
      <FooterComponent />
    </>
  );
};

export default RegisterPage;
