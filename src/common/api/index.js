import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://159.223.39.25:9999/analytics/',
});

export default axiosInstance;

export async function topCoPhieuAnhHuong() {
  try {
    const res = await axiosInstance.get('/top_co_phieu_anh_huong', {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.log('err', error);
  }
}

export async function danhSachThayDoi() {
  try {
    const res = await axiosInstance.get(
      '/danh_sach_thay_doi_chi_so_tung_nhom_nganh',
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          accept: 'application/json',
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log('err', error);
  }
}

export async function ketQuaGiaoDichNdtnn({ mode }) {
  try {
    const res = await axiosInstance.get(`/ket_qua_giao_dich_ndtnn/${mode}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log('err', error);
  }
}
