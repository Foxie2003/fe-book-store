"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import api from "@/app/api";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  danhMuc: IDanhMuc | null;
  setDanhMuc: (value: IDanhMuc | null) => void;
}
function UpdateDanhMucModal(props: IProps) {
  const { showModalUpdate, setShowModalUpdate, danhMuc, setDanhMuc } = props;
  const [idDanhMuc, setIdDanhMuc] = useState<number>(0);
  const [idLinhVuc, setIdLinhVuc] = useState<number>(0);
  const [tenDanhMuc, setTenDanhMuc] = useState<string>("");
  const [moTa, setMoTa] = useState<string>("");

  useEffect(() => {
    if (danhMuc) {
      setIdDanhMuc(danhMuc.idDanhMuc);
      setIdLinhVuc(danhMuc.idLinhVuc);
      setTenDanhMuc(danhMuc.tenDanhMuc);
      setMoTa(danhMuc.moTa);
    }
  }, [danhMuc]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${api}/linhVuc/getAll`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const linhVucs: ILinhVuc[] = data.data;

  const handleSubmit = () => {
    if (!tenDanhMuc) {
      toast.error("Tên danh mục không được để trống!");
      return;
    }

    fetch(`${api}/danhMuc/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idDanhMuc, idLinhVuc, tenDanhMuc, moTa }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Cập nhật danh mục thành công!");
          handleCloseModal();
          mutate(`${api}/danhMuc/getAll`);
        }
      });
  };

  const handleCloseModal = () => {
    setIdLinhVuc(0);
    setTenDanhMuc("");
    setMoTa("");
    setDanhMuc(null);
    setShowModalUpdate(false);
  };

  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật danh mục</Modal.Title>
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

export default UpdateDanhMucModal;
