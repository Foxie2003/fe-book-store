"use client";

import Modal from "react-bootstrap/Modal";
import Image from "next/image";

interface IProps {
  showModalViewImage: boolean;
  setShowModalViewImage: (value: boolean) => void;
  url: string;
}
function ImageViewModal(props: IProps) {
  const { showModalViewImage, setShowModalViewImage, url } = props;
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal
        show={showModalViewImage}
        onHide={() => setShowModalViewImage(false)}
        style={{ zIndex: 1060 }}
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={url}
            alt="Preview"
            width={500}
            height={500}
            style={{ padding: 10 }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImageViewModal;
