"use client";
import ProfileStyle from "@/styles/user/user.profile.module.css";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";

function ChangePassword() {
  const router = useRouter();
  return (
    <div className={ProfileStyle["profile-right-container"]}>
      <div className={ProfileStyle["profile-right-header"]}>Đổi mật khẩu</div>
      <div className={ProfileStyle["profile-right-body"]}>
        <Form className={ProfileStyle["profile-right-form"]}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className={ProfileStyle["profile-right-input-container"]}>
              <div
                style={{ width: 147 }}
                className={ProfileStyle["profile-right-label"]}
              >
                Mật khẩu hiện tại
              </div>
              <Form.Control
                style={{ width: "40%" }}
                className={ProfileStyle["profile-right-input"]}
                type="password"
                security="true"
                placeholder="Nhập mật khẩu hiện tại"
              />
            </div>
            <div className={ProfileStyle["profile-right-input-container"]}>
              <div
                style={{ width: 147 }}
                className={ProfileStyle["profile-right-label"]}
              >
                Mật khẩu mới
              </div>
              <Form.Control
                style={{ width: "40%" }}
                className={ProfileStyle["profile-right-input"]}
                type="password"
                security="true"
                placeholder="Nhập mật khẩu mới"
              />
            </div>
            <div className={ProfileStyle["profile-right-input-container"]}>
              <div
                style={{ width: 147 }}
                className={ProfileStyle["profile-right-label"]}
              >
                Nhập lại mật khẩu mới
              </div>
              <Form.Control
                style={{ width: "40%" }}
                className={ProfileStyle["profile-right-input"]}
                type="password"
                security="true"
                placeholder="Nhập lại mật khẩu mới"
              />
            </div>
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

export default ChangePassword;
