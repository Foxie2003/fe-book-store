"use client";
import Image from "next/image";
import { useState } from "react";
import AdminStyle from "@/styles/admin.module.css";
import menu from "../../../public/icon-menu.png";
import logo from "../../../public/logo.png";
import linhvuc from "../../../public/linhvuc.png";
import danhmuc from "../../../public/danhmuc.png";
import sach from "../../../public/sach.png";
import khachhang from "../../../public/khachhang.png";
import donhang from "../../../public/donhang.png";
import diachi from "../../../public/diachi.png";
import linhvucactive from "../../../public/linhvuc-active.png";
import danhmucactive from "../../../public/danhmuc-active.png";
import sachactive from "../../../public/sach-active.png";
import khachhangactive from "../../../public/khachhang-active.png";
import donhangactive from "../../../public/donhang-active.png";
import diachiactive from "../../../public/diachi-active.png";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className={AdminStyle["admin-container"]}>
      <div
        className={AdminStyle["admin-menu"]}
        style={{
          width: showMenu ? "20%" : "0%",
        }}
      >
        <Image
          src={logo}
          alt="logo"
          height={70}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <h4 className={AdminStyle["admin-menu-group-title"]}>SẢN PHẨM</h4>
        <div
          className={
            AdminStyle["admin-menu-item"] +
            " " +
            (pathname.includes("/admin/linhvuc")
              ? AdminStyle["admin-item-active"]
              : "")
          }
          onClick={() => {
            router.push("/admin/linhvuc");
          }}
        >
          <Image
            src={pathname.includes("/admin/linhvuc") ? linhvucactive : linhvuc}
            alt="icon"
            className={AdminStyle["admin-menu-item-image"]}
          />
          <div className={AdminStyle["admin-menu-item-title"]}>Lĩnh vực</div>
        </div>
        <div
          className={
            AdminStyle["admin-menu-item"] +
            " " +
            (pathname.includes("/admin/danhmuc")
              ? AdminStyle["admin-item-active"]
              : "")
          }
          onClick={() => {
            router.push("/admin/danhmuc");
          }}
        >
          <Image
            src={pathname.includes("/admin/danhmuc") ? danhmucactive : danhmuc}
            alt="icon"
            className={AdminStyle["admin-menu-item-image"]}
          />
          <div className={AdminStyle["admin-menu-item-title"]}>Danh mục</div>
        </div>
        <div
          className={
            AdminStyle["admin-menu-item"] +
            " " +
            (pathname.includes("/admin/sach")
              ? AdminStyle["admin-item-active"]
              : "")
          }
          onClick={() => {
            router.push("/admin/sach");
          }}
        >
          <Image
            src={pathname.includes("/admin/sach") ? sachactive : sach}
            alt="icon"
            className={AdminStyle["admin-menu-item-image"]}
          />
          <div className={AdminStyle["admin-menu-item-title"]}>Sách</div>
        </div>
        <h4 className={AdminStyle["admin-menu-group-title"]}>NGƯỜI DÙNG</h4>
        <div
          className={
            AdminStyle["admin-menu-item"] +
            " " +
            (pathname.includes("/admin/khachhang")
              ? AdminStyle["admin-item-active"]
              : "")
          }
          onClick={() => {
            router.push("/admin/khachhang");
          }}
        >
          <Image
            src={
              pathname.includes("/admin/khachhang")
                ? khachhangactive
                : khachhang
            }
            alt="icon"
            className={AdminStyle["admin-menu-item-image"]}
          />
          <div className={AdminStyle["admin-menu-item-title"]}>Khách hàng</div>
        </div>
        <div
          className={
            AdminStyle["admin-menu-item"] +
            " " +
            (pathname.includes("/admin/donhang")
              ? AdminStyle["admin-item-active"]
              : "")
          }
          onClick={() => {
            router.push("/admin/donhang");
          }}
        >
          <Image
            src={pathname.includes("/admin/donhang") ? donhangactive : donhang}
            alt="icon"
            className={AdminStyle["admin-menu-item-image"]}
          />
          <div className={AdminStyle["admin-menu-item-title"]}>Đơn hàng</div>
        </div>
        <div
          className={
            AdminStyle["admin-menu-item"] +
            " " +
            (pathname.includes("/admin/diachi")
              ? AdminStyle["admin-item-active"]
              : "")
          }
          onClick={() => {
            router.push("/admin/diachi");
          }}
        >
          <Image
            src={pathname.includes("/admin/diachi") ? diachiactive : diachi}
            alt="icon"
            className={AdminStyle["admin-menu-item-image"]}
          />
          <div className={AdminStyle["admin-menu-item-title"]}>
            Địa chỉ nhận hàng
          </div>
        </div>
      </div>
      <div
        className={AdminStyle["admin-main-container"]}
        style={{
          width: showMenu ? "80%" : "100%",
        }}
      >
        <div className={AdminStyle["admin-header"]}>
          <Image
            src={menu}
            alt="menu"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          <Image
            src={menu}
            alt="menu"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
