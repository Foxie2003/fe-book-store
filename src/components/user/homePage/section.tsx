import { ReactNode } from "react";
import homePageStyle from "@/styles/user/user.homePage.module.css";

function Section({
  children,
  HeaderComponent,
}: {
  children: ReactNode;
  HeaderComponent: ReactNode | null;
}) {
  return (
    <div className={homePageStyle["section-container"]}>
      {HeaderComponent && HeaderComponent}
      {children}
    </div>
  );
}

export default Section;
