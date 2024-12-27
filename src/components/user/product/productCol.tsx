import ProductStyle from "@/styles/user/user.product.module.css";
import ProductHorizontal from "@/components/user/product/productHorizontal";
import Image from "next/image";

function ProductCol() {
  return (
    <div className={ProductStyle["product-col"]}>
      <div className={ProductStyle["product-col-container"]}>
        <div>
          <ProductHorizontal />
          <ProductHorizontal />
          <ProductHorizontal />
          <ProductHorizontal />
        </div>
        <div>
          <div className={ProductStyle["product-col-info-container"]}>
            <Image
              src={"/bai-ca-mung-giang-sinh.png"}
              style={{ objectFit: "cover" }}
              width={309}
              height={378}
              alt="Product image"
            />
            <div className={ProductStyle["product-col-info-info"]}>
              <div className={ProductStyle["product-col-info-title"]}>
                Tên sản phẩm
              </div>
              <div className={ProductStyle["product-col-info-author"]}>
                Tác giả
              </div>
              <div className={ProductStyle["product-col-info-publisher"]}>
                Nhà xuất bản
              </div>
              <div className={ProductStyle["product-col-info-price"]}>
                100.000 đ
              </div>
              <div className={ProductStyle["product-col-info-price-container"]}>
                <div className={ProductStyle["product-col-info-old-price"]}>
                  200.000 đ
                </div>
                <div className={ProductStyle["product-col-info-sale-percent"]}>
                  -50%
                </div>
              </div>
              <div
                className={ProductStyle["product-col-info-description-title"]}
              >
                Tiêu đề mô tả
              </div>
              <div className={ProductStyle["product-col-info-description"]}>
                Câu chuyện mở đầu bằng hình ảnh Ebenezer Scrooge - một người đàn
                ông nghiệt ngã và keo kiệt. Đối với lão, Giáng sinh chỉ là một
                ngày như bao ngày khác, thậm chí Giáng sinh còn là thứ gì đó
                &quot;đáng nguyền rủa&quot;. Lão xỉa xói người phụ tá Bob
                Cratchit trung thành vì &quot;dám&quot; xin nghỉ lễ Giáng sinh
                những một ngày. Lão đuổi thẳng cổ đứa cháu trai Fred tốt bụng ra
                khỏi cửa vì &quot;dám&quot; chúc lão Giáng sinh vui vẻ và mời
                lão đến nhà dùng bữa. Rõ ràng Scrooge chẳng có ý định tận hưởng
                mùa lễ, và đêm nay - đêm trước Giáng sinh - thì vẫn như mọi khi,
                lão về lại căn nhà tối tăm, u ám của lão một mình...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ProductStyle["product-row-showMore-button"]}>
        Xem thêm
      </div>
    </div>
  );
}

export default ProductCol;
