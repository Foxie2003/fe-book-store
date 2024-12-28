import SearchStyle from "@/styles/user/user.search.module.css";
import Form from "react-bootstrap/Form";

function SearchHeader() {
  return (
    <div className={SearchStyle["search-header-container"]}>
      <div className={SearchStyle["search-header-title-container"]}>
        <div className={SearchStyle["search-header-title"]}>
          Kết quả tìm kiếm:
        </div>
        <div className={SearchStyle["search-header-search-value"]}>Văn học</div>
      </div>
      <div className={SearchStyle["search-header-combobox-container"]}>
        <div className={SearchStyle["search-header-combobox-title"]}>
          Sắp xếp theo
        </div>
        <Form.Select className={SearchStyle["search-header-combobox"]}>
          <option value="1">Độ liên quan</option>
          <option value="2">Mới nhất</option>
          <option value="3">Bán chạy</option>
          <option value="3">Giá bán</option>
        </Form.Select>
        <Form.Select className={SearchStyle["search-header-combobox"]}>
          <option value="1">15 sản phẩm</option>
          <option value="2">20 sản phẩm</option>
          <option value="3">25 sản phẩm</option>
          <option value="3">30 sản phẩm</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default SearchHeader;
