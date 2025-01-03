import ProductStyle from "@/styles/user/user.product.module.css";
import Product from "@/components/user/product/product";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

function ProductRow({
  productsRow,
  productsTest,
  showArrow,
  showMore,
  showPage,
}: {
  productsRow: number;
  productsTest: number;
  showArrow: boolean;
  showMore: boolean;
  showPage: boolean;
}) {
  return (
    <div className={ProductStyle["product-row"]}>
      {Array.from({ length: productsRow }, (_, i) => (
        <>
          <div
            key={i}
            style={{
              padding: showMore || showPage ? 0 : 15,
              marginBottom: productsRow > 1 && i != productsRow - 1 ? 30 : 0,
            }}
            className={ProductStyle["product-row-container"]}
          >
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
        </>
      ))}
      {showMore && (
        <div className={ProductStyle["product-row-showMore-button"]}>
          Xem thêm
        </div>
      )}
      {showPage && (
        <div className={ProductStyle["product-row-page-container"]}>
          <div className={ProductStyle["product-row-page-icon-container"]}>
            <FaAngleLeft size={20} />
          </div>
          <div className={ProductStyle["product-row-page-item-selected"]}>
            1
          </div>
          <div className={ProductStyle["product-row-page-item"]}>2</div>
          <div className={ProductStyle["product-row-page-item"]}>3</div>
          <div className={ProductStyle["product-row-page-item"]}>...</div>
          <div className={ProductStyle["product-row-page-item"]}>20</div>
          <div className={ProductStyle["product-row-page-icon-container"]}>
            <FaAngleRight size={20} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductRow;
