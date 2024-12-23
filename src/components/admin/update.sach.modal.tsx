"use client";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import api from "@/app/api";
import Image from "next/image";
import ViewImageModal from "./view.image.modal";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  page: number;
  sach: ISach | null;
  setSach: (value: ISach | null) => void;
}
function UpdateSachModal(props: IProps) {
  const { showModalUpdate, setShowModalUpdate, page, sach, setSach } = props;
  const [idSach, setIdSach] = useState<number>(0);
  const [tenSach, setTenSach] = useState<string>("");
  const [idDanhMuc, setIdDanhMuc] = useState<number>(0);
  const [tenDanhMuc, setTenDanhMuc] = useState<string>("");
  const [giaBan, setGiaBan] = useState<number>(0);
  const [tacGia, setTacGia] = useState<string>("");
  const [soLuong, setSoLuong] = useState<number>(0);
  const [anhBia, setAnhBia] = useState<string>("Chưa có ảnh");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [ghiChu, setGhiChu] = useState<string>("");
  const [nhaCungCap, setNhaCungCap] = useState<string>("");
  const [showModalViewImage, setShowModalViewImage] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${api}/danhMuc/getAll`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (data?.data?.length > 0) {
      setIdDanhMuc(data.data[0].idDanhMuc);
      setTenDanhMuc(data.data[0].tenDanhMuc);
    }
  }, [data]);

  useEffect(() => {
    if (sach) {
      setIdSach(sach.idSach);
      setTenSach(sach.tenSach);
      setIdDanhMuc(sach.idDanhMuc);
      setTenDanhMuc(sach.tenDanhMuc);
      setGiaBan(sach.giaBan);
      setTacGia(sach.tacGia);
      setSoLuong(sach.soLuong);
      setAnhBia(sach.anhBia);
      setGhiChu(sach.ghiChu);
      setNhaCungCap(sach.nhaCungCap);
    }
  }, [sach]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const danhMucs: IDanhMuc[] = data.data;

  const handleSubmit = () => {
    console.log(">>> check sach data: ", {
      idSach,
      tenSach,
      idDanhMuc,
      tenDanhMuc,
      giaBan,
      tacGia,
      soLuong,
      anhBia,
      ghiChu,
      nhaCungCap,
    });

    fetch(`${api}/sach/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idSach,
        tenSach,
        idDanhMuc,
        tenDanhMuc,
        giaBan,
        tacGia,
        soLuong,
        anhBia,
        ghiChu,
        nhaCungCap,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == "OK") {
          toast.success(res.message);
          handleUploadImage(res.data.idSach, imageFile);
        } else {
          toast.error(res.message);
        }
      });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleUploadImage = (id: string, file: File | null) => {
    if (file) {
      const formData = new FormData();
      formData.append("bookId", id);
      formData.append("file", file);

      console.log("check image: ", file);

      fetch(`${api}/api/books/image/upload`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status == "OK") {
            handleCloseModal();
            mutate(`${api}/sach/getSachPaging?page=${page - 1}&size=10`);
          } else {
            toast.error(res.message);
          }
        });
    } else {
      handleCloseModal();
      mutate(`${api}/sach/getSachPaging?page=${page - 1}&size=10`);
    }
  };

  const handleCloseModal = () => {
    setTenSach("");
    setIdDanhMuc(0);
    setTenDanhMuc("");
    setGiaBan(0);
    setTacGia("");
    setSoLuong(0);
    setImageFile(null);
    setPreviewImage(null);
    setGhiChu("");
    setNhaCungCap("");
    setSach(null);
    setShowModalUpdate(false);
  };

  return (
    <>
      {showModalViewImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1056,
          }}
        />
      )}
      <Modal
        show={showModalUpdate}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm sách</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1">
              <Form.Label>Tên sách</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tên sách"
                value={tenSach}
                onChange={(e) => setTenSach(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Danh mục</Form.Label>
              <Form.Select
                value={idDanhMuc}
                onChange={(e) => {
                  setIdDanhMuc(Number(e.target.value));
                  setTenDanhMuc(e.target.textContent || "");
                }}
              >
                {danhMucs.map((item) => (
                  <option key={item.idDanhMuc} value={item.idDanhMuc}>
                    {item.tenDanhMuc}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Giá bán</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={giaBan}
                onChange={(e) => setGiaBan(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Tác giả</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tác giả"
                value={tacGia}
                onChange={(e) => setTacGia(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control
                type="number"
                placeholder="Số lượng"
                value={soLuong}
                onChange={(e) => setSoLuong(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Ảnh bìa</Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
              />
              <div className="mt-2">
                <Image
                  src={
                    previewImage
                      ? previewImage
                      : `${api}/uploads/images/${anhBia}`
                  }
                  alt="Preview"
                  width={200}
                  height={200}
                  style={{ border: "1px solid #EEE" }}
                  onClick={() => setShowModalViewImage(true)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Chi chú"
                rows={8}
                value={ghiChu}
                onChange={(e) => setGhiChu(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Nhà cung cấp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhà cung cấp"
                value={nhaCungCap}
                onChange={(e) => setNhaCungCap(e.target.value)}
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
      <ViewImageModal
        showModalViewImage={showModalViewImage}
        setShowModalViewImage={setShowModalViewImage}
        url={`${api}/uploads/images/${anhBia}`}
      />
    </>
  );
}

export default UpdateSachModal;
