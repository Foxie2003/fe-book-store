import HeaderComponent from "@/components/user/user.header";
import FooterComponent from "@/components/admin/app.footer";
import HomePageStyle from "@/styles/user/user.homepage.module.css";
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <div className={HomePageStyle["user-container"]}>{children}</div>
      <FooterComponent />
    </>
  );
}
