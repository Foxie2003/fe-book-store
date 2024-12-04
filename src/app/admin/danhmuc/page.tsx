"use client";
import Table from "react-bootstrap/Table";
import TableStyle from "@/styles/table.module.css";
import Image from "next/image";
import danhmucactive from "../../../../public/danhmuc-active.png";
import useSWR from "swr/immutable";
import addicon from "../../../../public/add.png";
import updateicon from "../../../../public/update.png";
import deleteicon from "../../../../public/delete.png";
import AddDanhMucModal from "@/components/add.danhmuc.modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateDanhMucModal from "@/components/update.danhmuc.modal";
import DeleteModal from "@/components/delete.modal";
import api from "@/app/api";

function DanhMucPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${api}/danhMuc/getAll`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [danhMuc, setDanhMuc] = useState<IDanhMuc | null>(null);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [idDanhMuc, setIdDanhMuc] = useState<number | null>(null);
  if (isLoading) return <div>Loading data...</div>;
  console.log(">>> check data: ", data, error);
  const danhMucs: IDanhMuc[] = data.data;

  return (
    <div className={TableStyle["container"]}>
      <div style={{ display: "flex" }}>
        <Image src={danhmucactive} alt="icon" />
        <h3 style={{ fontSize: 24 }}>Quản lý danh mục</h3>
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
                Tên danh mục
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Lĩnh vực
              </th>
              <th
                style={{ backgroundColor: "#eee", padding: 12 }}
                className={TableStyle["table-header-cell"]}
              >
                Mô tả
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
            {danhMucs.map((item) => (
              <tr key={item.idDanhMuc}>
                <td className={TableStyle["table-data-cell"]}>
                  {item.idDanhMuc}
                </td>
                <td className={TableStyle["table-data-cell"]}>
                  {item.tenDanhMuc}
                </td>
                <td className={TableStyle["table-data-cell"]}>
                  {item.tenLinhVuc}
                </td>
                <td className={TableStyle["table-data-cell"]}>{item.moTa}</td>
                <td className={TableStyle["table-data-function-cell"]}>
                  <div className={TableStyle["table-data-function-container"]}>
                    <Image
                      src={updateicon}
                      alt="icon"
                      onClick={() => {
                        setDanhMuc(item);
                        setShowModalUpdate(true);
                      }}
                    />
                    <Image
                      src={deleteicon}
                      alt="icon"
                      onClick={() => {
                        setIdDanhMuc(item.idDanhMuc);
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
        <div>1/10</div>
        <Button
          variant="success"
          style={{ position: "absolute", right: 0 }}
          onClick={() => setShowModalAdd(true)}
        >
          <Image src={addicon} alt="icon" />
          Thêm danh mục
        </Button>
      </div>
      <AddDanhMucModal
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
      />
      <UpdateDanhMucModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        danhMuc={danhMuc}
        setDanhMuc={setDanhMuc}
      />
      <DeleteModal
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        title="danh mục"
        urls={[`${api}/danhMuc/delete/${idDanhMuc}`]}
        mutateUrl={`${api}/danhMuc/getAll`}
      />
    </div>
  );
}

export default DanhMucPage;
