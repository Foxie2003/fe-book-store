import SearchStyle from "@/styles/user/user.search.module.css";
import SearchHeader from "@/components/user/search/searchHeader";
import ProductRow from "@/components/user/product/productRow";

function SearchPage() {
  return (
    <div className={SearchStyle["search-container"]}>
      <SearchHeader />
      <ProductRow
        productsRow={3}
        productsTest={5}
        showArrow={false}
        showMore={false}
        showPage={true}
      />
    </div>
  );
}

export default SearchPage;
