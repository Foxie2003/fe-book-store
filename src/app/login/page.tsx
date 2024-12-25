"use client";

import loginStyle from "@/styles/login/login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  const router = useRouter();
  return (
    <>
      <div className={loginStyle["login-container"]}>
        <Form className={loginStyle["login-form-container"]}>
          <h2 className={loginStyle["login-form-title"]}>Đăng nhập</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className={loginStyle["login-form-input"]}
              type="password"
              placeholder="Password"
            />
            <Link
              href={"#"}
              className={loginStyle["login-form-link"]}
              style={{ display: "block" }}
            >
              Quên mật khẩu
            </Link>
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
              Đăng nhập
            </Button>
          </div>
          <div className={loginStyle["login-form-text"]}>
            Bạn chưa có tài khoản?{" "}
            <Link href={"#"} className={loginStyle["login-form-link"]}>
              Đăng ký
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
