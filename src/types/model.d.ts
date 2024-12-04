interface ILinhVuc {
  idLinhVuc: number;
  tenLinhVuc: string;
  moTa: string;
}

interface IDanhMuc {
  idDanhMuc: number;
  idLinhVuc: number;
  tenLinhVuc: string;
  tenDanhMuc: string;
  moTa: string;
}

interface ISach {
  idSach: number;
  tenSach: string;
  idDanhMuc: number;
  tenDanhMuc: string;
  giaBan: number;
  tacGia: string;
  soLuong: number;
  anhBia: string;
  ghiChu: string;
  nhaCungCap: string;
}