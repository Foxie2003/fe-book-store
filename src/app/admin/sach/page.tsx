"use client";
import Table from "react-bootstrap/Table";
import TableStyle from "@/styles/table.module.css";
import Image from "next/image";
import danhmucactive from "../../../../public/danhmuc-active.png";
import useSWR from "swr/immutable";
import addicon from "../../../../public/add.png";
import updateicon from "../../../../public/update.png";
import deleteicon from "../../../../public/delete.png";
import backicon from "../../../../public/back.png";
import nexticon from "../../../../public/next.png";
import AddSachModal from "@/components/add.sach.modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateDanhMucModal from "@/components/update.sach.modal";
import DeleteModal from "@/components/delete.modal";
import Form from "react-bootstrap/Form";
import api from "@/app/api";

const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("vi-VN").format(number);
};

function SachPage() {
  const [page, setPage] = useState<number>(1);

  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [sach, setSach] = useState<ISach | null>(null);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [idSach, setIdSach] = useState<number | null>(null);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${api}/sach/getSachPaging?page=${page - 1}&size=10`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return <div>Loading data...</div>;
  if (!data) return <div>Không có dữ liệu</div>;
  console.log(">>> check data: ", data, error);

  const sachs: ISach[] = data.data.content;
  const maxPage: number = data.data.totalPages;

  return (
    <div className={TableStyle["container"]}>
      <div style={{ display: "flex" }}>
        <Image src={danhmucactive} alt="icon" />
        <h3 style={{ fontSize: 24 }}>Quản lý sách</h3>
      </div>
      <div className={TableStyle["table"]}>
        <Table bordered hover>
          <thead className={TableStyle["table-header"]}>
            <tr>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                ID
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Tên sách
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Danh mục
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Giá bán
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Tác giả
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Số lượng
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Ảnh bìa
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Nhà cung cấp
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {sachs.map((item) => (
              <tr key={item.idSach}>
                <td className={TableStyle["table-data-cell"]}>{item.idSach}</td>
                <td className={TableStyle["table-data-cell"]}>
                  {item.tenSach}
                </td>
                <td className={TableStyle["table-data-cell"]}>
                  {item.tenDanhMuc}
                </td>
                <td className={TableStyle["table-data-cell"]}>
                  {formatCurrency(item.giaBan)}
                </td>
                <td className={TableStyle["table-data-cell"]}>{item.tacGia}</td>
                <td className={TableStyle["table-data-cell"]}>
                  {formatCurrency(item.soLuong)}
                </td>
                <td className={TableStyle["table-data-cell"]}>
                  <Image
                    src={`${api}/uploads/images/${item.anhBia}`}
                    width={92}
                    height={92}
                    alt="image"
                  />
                </td>
                <td className={TableStyle["table-data-cell"]}>
                  {item.nhaCungCap}
                </td>
                <td className={TableStyle["table-data-function-cell"]}>
                  <div className={TableStyle["table-data-function-container"]}>
                    <Image
                      src={updateicon}
                      alt="icon"
                      onClick={() => {
                        setSach(item);
                        setShowModalUpdate(true);
                      }}
                    />
                    <Image
                      src={deleteicon}
                      alt="icon"
                      onClick={() => {
                        setIdSach(item.idSach);
                        setShowModalDelete(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={TableStyle["table-bottom-nav"]}>
        <Button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
          style={{
            height: 30,
            width: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            border: "none",
          }}
        >
          <Image src={backicon} alt="icon" style={{ height: 20, width: 20 }} />
        </Button>
        <Form.Control
          type="text"
          placeholder="1"
          value={page}
          onChange={(e) => {
            if (Number(e.target.value)) {
              if (
                Number(e.target.value) > 0 &&
                Number(e.target.value) <= maxPage
              ) {
                setPage(Number(e.target.value));
              }
            }
          }}
          style={{
            height: 30,
            width: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 0,
            fontSize: 16,
          }}
        />
        <div style={{ fontSize: 16 }}>/ {maxPage}</div>
        <Button
          onClick={() => {
            if (page < maxPage) {
              setPage(page + 1);
            }
          }}
          style={{
            height: 30,
            width: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            border: "none",
          }}
        >
          <Image src={nexticon} alt="icon" style={{ height: 20, width: 20 }} />
        </Button>
        <Button
          variant="success"
          style={{ position: "absolute", right: 0 }}
          onClick={() => setShowModalAdd(true)}
        >
          <Image src={addicon} alt="icon" />
          Thêm sách
        </Button>
      </div>
      <AddSachModal
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
        page={page}
      />
      <UpdateDanhMucModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        page={page}
        sach={sach}
        setSach={setSach}
      />
      <DeleteModal
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        title="sách"
        urls={[
          `${api}/api/books/${idSach}/image`,
          `${api}/sach/delete/${idSach}`,
        ]}
        mutateUrl={`${api}/sach/getSachPaging?page=${page - 1}&size=10`}
      />
    </div>
  );
}

export default SachPage;
