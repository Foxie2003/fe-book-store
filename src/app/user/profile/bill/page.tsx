import TableStyle from "@/styles/admin/table.module.css";
import ProfileStyle from "@/styles/user/user.profile.module.css";
import { Table } from "react-bootstrap";

function BillPage() {
  return (
    <div className={ProfileStyle["profile-right-container"]}>
      <div className={TableStyle["table"]}>
        <Table bordered hover>
          <thead className={TableStyle["table-header"]}>
            <tr>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Mã đơn hàng
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Mã người dùng
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Số điện thoại
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Địa chỉ
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Mã sách
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Số lượng
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Đơn giá
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12, fontSize: 11 }}
                className={TableStyle["table-header-cell"]}
              >
                Tình trạng đơn hàng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                DonHang01
              </td>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                NguoiDung01
              </td>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                0987654321
              </td>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                Số 10, Ngõ 43, Nguyễn Phong Sắc, Cầu Giấy, Hà Nội
              </td>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                8935212365291
              </td>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                02
              </td>
              <td
                className={TableStyle["table-data-cell"]}
                style={{ fontSize: 10 }}
              >
                96.260đ
              </td>
              <td
                style={{ color: "#D10000", fontSize: 10 }}
                className={TableStyle["table-data-cell"]}
              >
                Đang chờ xác nhận
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BillPage;
