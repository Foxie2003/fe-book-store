import FooterComponent from "@/components/admin/app.footer";
import HeaderComponent from "@/components/login/login.header";

export default function ForgotPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent title="Quên mật khẩu" />
      {children}
      <FooterComponent />
    </>
  );
}
