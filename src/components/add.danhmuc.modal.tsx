"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import api from "@/app/api";

interface IProps {
  showModalAdd: boolean;
  setShowModalAdd: (value: boolean) => void;
}
function AddDanhMucModal(props: IProps) {
  const { showModalAdd, setShowModalAdd } = props;
  const idDanhMuc = 0;
  const [idLinhVuc, setIdLinhVuc] = useState<number>(0);
  const [tenDanhMuc, setTenDanhMuc] = useState<string>("");
  const [moTa, setMoTa] = useState<string>("");
  console.log(idLinhVuc);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${api}/linhVuc/getAll`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (data?.data?.length > 0) {
      setIdLinhVuc(data.data[0].idLinhVuc);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const linhVucs: ILinhVuc[] = data.data;

  const handleSubmit = () => {
    if (!tenDanhMuc) {
      toast.error("Tên danh mục không được để trống!");
      return;
    }

    fetch(`${api}/danhMuc/insert`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idDanhMuc, idLinhVuc, tenDanhMuc, moTa }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(">>> check status: ", res.status);
        if (res.status == "OK") {
          toast.success("Thêm danh mục thành công!");
          handleCloseModal();
          mutate(`${api}/danhMuc/getAll`);
        } else {
          toast.error(res.message);
        }
      });
  };

  const handleCloseModal = () => {
    setIdLinhVuc(0);
    setTenDanhMuc("");
    setMoTa("");
    setShowModalAdd(false);
  };

  return (
    <>
      <Modal
        show={showModalAdd}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tên danh mục"
                value={tenDanhMuc}
                onChange={(e) => setTenDanhMuc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lĩnh vực</Form.Label>
              <Form.Select
                value={idLinhVuc}
                onChange={(e) => setIdLinhVuc(Number(e.target.value))}
              >
                {linhVucs.map((item) => (
                  <option key={item.idLinhVuc} value={item.idLinhVuc}>
                    {item.tenLinhVuc}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Mô tả"
                rows={3}
                value={moTa}
                onChange={(e) => setMoTa(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDanhMucModal;
