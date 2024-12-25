import ProductStyle from "@/styles/user/user.product.module.css";
import Product from "@/components/user/product/product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function ProductRow({
  productsTest,
  showArrow,
  showMore,
}: {
  productsTest: number;
  showArrow: boolean;
  showMore: boolean;
}) {
  return (
    <div className={ProductStyle["product-row"]}>
      <div className={ProductStyle["product-row-container"]}>
        {Array.from({ length: productsTest }, (_, i) => (
          <Product key={i} />
        ))}
        {showArrow && (
          <>
            <div className={ProductStyle["product-row-next-button"]}>
              <FaChevronRight size={24} />
            </div>
            <div className={ProductStyle["product-row-back-button"]}>
              <FaChevronLeft size={24} />
            </div>
          </>
        )}
      </div>
      {showMore && (
        <div className={ProductStyle["product-row-showMore-button"]}>
          Xem thêm
        </div>
      )}
    </div>
  );
}

export default ProductRow;
