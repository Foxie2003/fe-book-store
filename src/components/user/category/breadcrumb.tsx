import CategoryStyle from "@/styles/user/user.category.module.css";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumb({ items }: { items: { title: string; link: string }[] }) {
  return (
    <div className={CategoryStyle["breadcrumb-container"]}>
      {items?.map((item, index) => (
        <>
          <Link
            href={item.link}
            key={index}
            className={CategoryStyle["breadcrumb-item"]}
          >
            {item.title}
          </Link>
          {index != items.length - 1 && (
            <FaAngleRight color="rgba(0, 0, 0, 0.3)" />
          )}
        </>
      ))}
    </div>
  );
}

export default Breadcrumb;
