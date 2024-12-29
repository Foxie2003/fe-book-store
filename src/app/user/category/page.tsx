"use client";

import CategoryStyle from "@/styles/user/user.category.module.css";
import Breadcrumb from "@/components/user/category/breadcrumb";
import ProductRow from "@/components/user/product/productRow";
import CategoryHeader from "@/components/user/category/categoryHeader";

function CategoryPage() {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: "Trang chủ", link: "/user" },
          { title: "Sách văn học", link: "/user/category" },
        ]}
      />
      <div className={CategoryStyle["category-container"]}>
        <CategoryHeader />
        <ProductRow
          productsRow={3}
          productsTest={5}
          showArrow={false}
          showMore={false}
          showPage={true}
        />
      </div>
    </div>
  );
}

export default CategoryPage;
