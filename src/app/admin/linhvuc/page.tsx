"use client";
import Table from "react-bootstrap/Table";
import TableStyle from "@/styles/table.module.css";
import Image from "next/image";
import linhvucactive from "../../../../public/linhvuc-active.png";
import useSWR from "swr/immutable";
import addicon from "../../../../public/add.png";
import updateicon from "../../../../public/update.png";
import deleteicon from "../../../../public/delete.png";
import AddLinhVucModal from "@/components/add.linhvuc.modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateLinhVucModal from "@/components/update.linhvuc.modal";
import DeleteModal from "@/components/delete.modal";
import api from "@/app/api";

function LinhVucPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${api}/linhVuc/getAll`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [linhVuc, setLinhVuc] = useState<ILinhVuc | null>(null);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [idLinhVuc, setIdLinhVuc] = useState<number | null>(null);
  if (isLoading) return <div>Loading data...</div>;
  console.log(">>> check data: ", data, error);
  const linhVucs: ILinhVuc[] = data.data;

  return (
    <div className={TableStyle["container"]}>
      <div style={{ display: "flex" }}>
        <Image src={linhvucactive} alt="icon" />
        <h3 style={{ fontSize: 24 }}>Quản lý lĩnh vực</h3>
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
                Tên lĩnh vực
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
            {linhVucs.map((item) => (
              <tr key={item.idLinhVuc}>
                <td className={TableStyle["table-data-cell"]}>
                  {item.idLinhVuc}
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
                        setLinhVuc(item);
                        setShowModalUpdate(true);
                      }}
                    />
                    <Image
                      src={deleteicon}
                      alt="icon"
                      onClick={() => {
                        setIdLinhVuc(item.idLinhVuc);
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
          Thêm lĩnh vực
        </Button>
      </div>
      <AddLinhVucModal
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
      />
      <UpdateLinhVucModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        linhVuc={linhVuc}
        setLinhVuc={setLinhVuc}
      />
      <DeleteModal
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        title="lĩnh vực"
        urls={[`${api}/linhVuc/delete/${idLinhVuc}`]}
        mutateUrl={`${api}/linhVuc/getAll`}
      />
    </div>
  );
}

export default LinhVucPage;
