"use client";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalDelete: boolean;
  setShowModalDelete: (value: boolean) => void;
  title: string;
  urls: string[];
  mutateUrl: string;
}
function DeleteModal(props: IProps) {
  const { showModalDelete, setShowModalDelete, title, urls, mutateUrl } = props;
  const handleSubmit = async () => {
    try {
      let message;
      for (const url of urls) {
        const response = await fetch(url, {
          method: "DELETE",
        });
        const data = await response.json();

        if (data.status != "OK") {
          toast.error(data.message);
        }

        message = data.message;
      }
      toast.error(message);
      handleCloseModal();
      mutate(mutateUrl);
    } catch {
      toast.error("Có lỗi xảy ra khi xóa");
    }
  };

  const handleCloseModal = () => {
    setShowModalDelete(false);
  };

  return (
    <>
      <Modal
        show={showModalDelete}
        onHide={handleCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Xóa {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn xóa {title} không?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Thoát
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
