import ProductDetailsStyle from "@/styles/user/user.productDetails.module.css";
import InfoLeft from "./infoLeft";
import InfoRight from "./infoRight";
import Section from "../homePage/section";
import ProductRow from "../product/productRow";
import ProductRating from "./productRating";

function ProductDetails() {
  return (
    <>
      {/* Product details */}
      <div className={ProductDetailsStyle["product-details-container"]}>
        <InfoLeft />
        <InfoRight />
      </div>
      {/* Related products */}
      <Section
        HeaderComponent={
          <div className={ProductDetailsStyle["related-product-header"]}>
            Sản phẩm liên quan
          </div>
        }
      >
        <ProductRow
          productsRow={1}
          productsTest={5}
          showArrow={true}
          showMore={false}
        />
      </Section>
      {/* Product rating */}
      <ProductRating />
    </>
  );
}

export default ProductDetails;
