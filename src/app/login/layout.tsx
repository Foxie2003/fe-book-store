import HeaderComponent from "@/components/login.header";
import FooterComponent from "@/components/app.footer";
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
