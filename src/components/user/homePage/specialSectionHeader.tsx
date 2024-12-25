import homePageStyle from "@/styles/user/user.homePage.module.css";
import { IconType } from "react-icons";

function SpecialSectionHeader({
  title,
  Icon,
}: {
  title: string;
  Icon: IconType | null;
}) {
  return (
    <div className={homePageStyle["special-header-container"]}>
      {Icon && (
        <div className={homePageStyle["special-header-icon"]}>
          <Icon size={28} color="#FFF" />
        </div>
      )}
      <div className={homePageStyle["special-header-title"]}>{title}</div>
    </div>
  );
}

export default SpecialSectionHeader;
