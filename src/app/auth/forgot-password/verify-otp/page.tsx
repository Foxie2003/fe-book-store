"use client";
import LoginStyle from "@/styles/login/login.module.css";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { useRef } from "react";

function VerifyOTPPage() {
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    // Chuyển sang ô tiếp theo nếu có giá trị
    if (value) {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      // Nếu ô hiện tại rỗng, quay lại ô trước
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

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
          BNP BOOKS đã gửi mã xác nhận tới địa chỉ email <b>nam123@gmail.com</b>
          . Vui lòng kiểm tra email và <br></br> nhập chính xác mã ở bên dưới để
          lấy lại mật khẩu
        </div>
      </div>
      <Form className={LoginStyle["forgot-password-form-container"]}>
        <div className="d-flex justify-content-center">
          {[...Array(6)].map((_, index) => (
            <Form.Group
              controlId={`formBasicOTP${index}`}
              key={index}
              className="mx-1"
            >
              <Form.Control
                ref={(el: HTMLInputElement | null) => {
                  inputRefs.current[index] = el;
                }}
                className={LoginStyle["verify-otp-input"]}
                type="text"
                onFocus={(e) => e.target.select()}
                maxLength={1}
                onChange={(e) =>
                  handleChange(index, e as React.ChangeEvent<HTMLInputElement>)
                }
                placeholder=""
              />
            </Form.Group>
          ))}
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

export default VerifyOTPPage;
