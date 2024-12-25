import HeaderComponent from "@/components/user/user.header";
import FooterComponent from "@/components/admin/app.footer";
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
