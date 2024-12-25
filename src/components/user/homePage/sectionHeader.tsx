import homePageStyle from "@/styles/user/user.homePage.module.css";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className={homePageStyle["section-header-container"]}>
      <div className={homePageStyle["section-header-title"]}>{title}</div>
      <div className={homePageStyle["section-header-line"]}></div>
      <div className={homePageStyle["section-header-gradient"]}></div>
    </div>
  );
}

export default SectionHeader;
