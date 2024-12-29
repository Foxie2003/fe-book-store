import CategoryStyle from "@/styles/user/user.category.module.css";
import Form from "react-bootstrap/Form";

function CategoryHeader() {
  return (
    <div className={CategoryStyle["category-header-container"]}>
      <div className={CategoryStyle["category-header-combobox-container"]}>
        <div className={CategoryStyle["category-header-combobox-title"]}>
          Sắp xếp theo
        </div>
        <Form.Select className={CategoryStyle["category-header-combobox"]}>
          <option value="1">Độ liên quan</option>
          <option value="2">Mới nhất</option>
          <option value="3">Bán chạy</option>
          <option value="3">Giá bán</option>
        </Form.Select>
        <Form.Select className={CategoryStyle["category-header-combobox"]}>
          <option value="1">15 sản phẩm</option>
          <option value="2">20 sản phẩm</option>
          <option value="3">25 sản phẩm</option>
          <option value="3">30 sản phẩm</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default CategoryHeader;
