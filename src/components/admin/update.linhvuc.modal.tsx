"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
import api from "@/app/api";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  linhVuc: ILinhVuc | null;
  setLinhVuc: (value: ILinhVuc | null) => void;
}
function UpdateLinhVucModal(props: IProps) {
  const { showModalUpdate, setShowModalUpdate, linhVuc, setLinhVuc } = props;
  const [idLinhVuc, setIdLinhVuc] = useState<number>(0);
  const [tenLinhVuc, setTenLinhVuc] = useState<string>("");
  const [moTa, setMoTa] = useState<string>("");

  useEffect(() => {
    if (linhVuc) {
      setIdLinhVuc(linhVuc.idLinhVuc);
      setTenLinhVuc(linhVuc.tenLinhVuc);
      setMoTa(linhVuc.moTa);
    }
  }, [linhVuc]);

  const handleSubmit = () => {
    console.log("Clicked");

    if (!tenLinhVuc) {
      toast.error("Tên lĩnh vực không được để trống!");
      return;
    }
    console.log(
      ">>> check data add: ",
      JSON.stringify({ idLinhVuc, tenLinhVuc, moTa })
    );

    fetch(`${api}/linhVuc/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idLinhVuc, tenLinhVuc, moTa }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Cập nhật lĩnh vực thành công!");
          handleCloseModal();
          mutate(`${api}/linhVuc/getAll`);
        }
      });
  };

  const handleCloseModal = () => {
    setTenLinhVuc("");
    setMoTa("");
    setLinhVuc(null);
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
          <Modal.Title>Cập nhật lĩnh vực</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên lĩnh vực</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tên lĩnh vực"
                value={tenLinhVuc}
                onChange={(e) => setTenLinhVuc(e.target.value)}
              />
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
          <Button variant="warning" onClick={handleSubmit}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateLinhVucModal;
