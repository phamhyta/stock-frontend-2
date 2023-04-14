import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-stock2.aiotlab-annotation.com/analytics/',
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
    return res.data;
  } catch (error) {
    console.log('err', error);
  }
}

export async function nhipDapThiTruong() {
  try {
    const res = await axiosInstance.get('/nhip-dap-thi-truong', {
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

export async function topTangGia({ mode }) {
  try {
    const res = await axiosInstance.get(
      `/danh_sach_top_10_tang_manh_nhat/${mode}`,
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

export async function topGiamGia({ mode }) {
  try {
    const res = await axiosInstance.get(
      `/danh_sach_top_10_giam_manh_nhat/${mode}`,
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
