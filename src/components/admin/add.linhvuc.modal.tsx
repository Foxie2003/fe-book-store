"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
import api from "@/app/api";

interface IProps {
  showModalAdd: boolean;
  setShowModalAdd: (value: boolean) => void;
}
function AddLinhVucModal(props: IProps) {
  const { showModalAdd, setShowModalAdd } = props;
  const idLinhVuc = 0;
  const [tenLinhVuc, setTenLinhVuc] = useState<string>("");
  const [moTa, setMoTa] = useState<string>("");

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

    fetch(`${api}/linhVuc/insert`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idLinhVuc, tenLinhVuc, moTa }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Thêm lĩnh vực thành công!");
          handleCloseModal();
          mutate(`${api}/linhVuc/getAll`);
        }
      });
  };

  const handleCloseModal = () => {
    setTenLinhVuc("");
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
          <Modal.Title>Thêm lĩnh vực</Modal.Title>
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
          <Button variant="primary" onClick={handleSubmit}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddLinhVucModal;
