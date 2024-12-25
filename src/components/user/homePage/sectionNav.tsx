import homePageStyle from "@/styles/user/user.homePage.module.css";

function SectionNav({ items }: { items: string[] }) {
  return (
    <div className={homePageStyle["section-nav-container"]}>
      {items.map((item) => (
        <div key={item} className={homePageStyle["section-nav-item"]}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default SectionNav;
