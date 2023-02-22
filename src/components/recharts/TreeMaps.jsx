import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tài chính',
    size: 282714000,
    children: [
      {
        name: 'NVL',
        company: 'CTCP Tập đoàn đầu tư địa ốc NoVA',
        price: 11.5,
        size: 51758200,
        change: -6.69,
      },
      {
        name: 'STB',
        company: 'Ngân hàng TMCP Sài Gòn',
        price: 23.35,
        size: 33356400,
        change: -4.3,
      },
      {
        name: 'SSI',
        company: 'CTCP Chứng khoán SSI',
        price: 11.5,
        size: 51758200,
        change: -6.69,
      },
    ],
    change: -1.2,
  },
  {
    name: 'Vật liệu cơ bản  ',
    size: 67118200,
    children: [
      {
        name: 'HPG',
        company: 'CTCP Tập đoàn Hoà Phát',
        price: 20.8,
        size: 20076200,
        change: -0.97,
      },
      {
        name: 'HSG',
        company: 'CTCP Tập đoàn Hoa Sen',
        price: 15.1,
        size: 18776500,
        change: -1.68,
      },
      {
        name: 'NKG',
        company: 'CTCP Thép Nam Kim',
        price: 14.1,
        size: 9535400,
        change: -0.17,
      },
    ],
    change: 0,
  },
  {
    name: 'Công nghiệp',
    size: 66530500,
    children: [
      {
        name: 'LCG',
        company: 'CTCP Lizen',
        price: 11.25,
        size: 15401600,
        change: 6.64,
      },
      {
        name: 'HHV',
        company: 'CTCP Đầu tư Hạ tầng giao thông Đèo Cả',
        price: 12.85,
        size: 12601600,
        change: 6.64,
      },
      {
        name: 'VCG',
        company: 'Tổng CTCP Xuất nhập khẩu và Xây dựng Việt Nam',
        price: 20.15,
        size: 10046600,
        change: 6.9,
      },
    ],
    change: 1.2,
  },
];

const TreeMaps = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        width={400}
        height={200}
        data={data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill={data.change < 0 ? '#0065FF' : '#00BF71'}
      />
    </ResponsiveContainer>
  );
};
export default TreeMaps;
