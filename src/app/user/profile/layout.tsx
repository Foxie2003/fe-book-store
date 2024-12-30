import ProfileStyle from "@/styles/user/user.profile.module.css";
import ProfileMenu from "@/components/user/profile/profileMenu";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={ProfileStyle["profile-container"]}>
      <ProfileMenu />
      {children}
    </div>
  );
}
