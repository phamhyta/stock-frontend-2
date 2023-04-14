import React, { useEffect, useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { nhipDapThiTruong } from '../../../common/api';

// const datas = {
//   name: 'Root',
//   children: [
//     {
//       name: 'Tài chính',
//       transaction_volume: 136872800,
//       children: [
//         {
//           name: 'NVL',
//           company: 'CTCP Tập đoàn đầu tư địa ốc NoVA',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: -6.69,
//         },
//         {
//           name: 'STB',
//           company: 'Ngân hàng TMCP Sài Gòn',
//           price: 23.35,
//           transaction_volume: 33356400,
//           change: -4.3,
//         },
//         {
//           name: 'SSI',
//           company: 'CTCP Chứng khoán SSI',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: -6.69,
//         },
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: 0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//         {
//           name: 'NVL',
//           company: 'CTCP Tập đoàn đầu tư địa ốc NoVA',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: 9.69,
//         },
//         {
//           name: 'STB',
//           company: 'Ngân hàng TMCP Sài Gòn',
//           price: 23.35,
//           transaction_volume: 33356400,
//           change: 4.3,
//         },
//         {
//           name: 'SSI',
//           company: 'CTCP Chứng khoán SSI',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: 6.69,
//         },
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: 0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: 0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: -2.17,
//         },
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: -0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: -1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: -2.17,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Tài chính',
//       transaction_volume: 136872800,
//       children: [
//         {
//           name: 'NVL',
//           company: 'CTCP Tập đoàn đầu tư địa ốc NoVA',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: -6.69,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Vật liệu cơ bản',
//       transaction_volume: 48388100,
//       children: [
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: -0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Công nghiệp',
//       transaction_volume: 38049800,
//       children: [
//         {
//           name: 'SRCL',
//           company: 'Stericycle, Inc.',
//           price: 11.25,
//           transaction_volume: 15401600,
//           change: 0.98,
//         },
//         {
//           name: 'RSG',
//           company: 'Republic Services, Inc.',
//           price: 12.85,
//           transaction_volume: 12601600,
//           change: -1.57,
//         },
//         {
//           name: 'WM',
//           company: 'Waste Management, Inc.',
//           price: 20.15,
//           transaction_volume: 10046600,
//           change: 3.7,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Tài chính',
//       transaction_volume: 136872800,
//       children: [
//         {
//           name: 'NVL',
//           company: 'CTCP Tập đoàn đầu tư địa ốc NoVA',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: -6.69,
//         },
//         {
//           name: 'STB',
//           company: 'Ngân hàng TMCP Sài Gòn',
//           price: 23.35,
//           transaction_volume: 33356400,
//           change: -4.3,
//         },
//         {
//           name: 'SSI',
//           company: 'CTCP Chứng khoán SSI',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: -6.69,
//         },
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: 0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Tài chính',
//       transaction_volume: 136872800,
//       children: [
//         {
//           name: 'NVL',
//           company: 'CTCP Tập đoàn đầu tư địa ốc NoVA',
//           price: 11.5,
//           transaction_volume: 51758200,
//           change: -6.69,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Vật liệu cơ bản',
//       transaction_volume: 48388100,
//       children: [
//         {
//           name: 'AOS',
//           company: 'A. O. Smith Corporation',
//           price: 20.8,
//           transaction_volume: 20076200,
//           change: -0.97,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 15.1,
//           transaction_volume: 18776500,
//           change: 1.68,
//         },
//         {
//           name: 'EMR',
//           company: 'Emerson Electric Co.',
//           price: 14.1,
//           transaction_volume: 9535400,
//           change: 2.17,
//         },
//       ],
//       change: -1.2,
//     },
//     {
//       name: 'Công nghiệp',
//       transaction_volume: 38049800,
//       children: [
//         {
//           name: 'SRCL',
//           company: 'Stericycle, Inc.',
//           price: 11.25,
//           transaction_volume: 15401600,
//           change: 0.98,
//         },
//         {
//           name: 'RSG',
//           company: 'Republic Services, Inc.',
//           price: 12.85,
//           transaction_volume: 12601600,
//           change: -1.57,
//         },
//         {
//           name: 'WM',
//           company: 'Waste Management, Inc.',
//           price: 20.15,
//           transaction_volume: 10046600,
//           change: 3.7,
//         },
//       ],
//       change: -1.2,
//     },
//   ],
//   change: 0,
// };

const TreeMaps = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await nhipDapThiTruong();
      if (res.code === 200) {
        setDatas(res.data);
      }
    };
    fetch();
  }, []);
  console.log(datas);
  const data = {
    name: 'Root',
    children: datas,
  };
  const options = {
    data: data,
    series: [
      {
        type: 'treemap',
        labelKey: 'name',
        sizeKey: 'transaction_volume',
        colorKey: 'change',
        company: 'company',
        price: 'price',

        tooltip: {
          renderer: (params) => {
            return {
              content: `<b>change</b>: ${params.datum[params.colorKey].toFixed(
                2
              )}%
              </br>
              <b>company</b>: ${params.datum.company ?? ''}
              </br>
              <b>price</b>: ${params.datum.price ?? ''}`,
            };
          },
        },
        formatter: (params) => ({
          stroke: params.depth < 2 ? 'transparent' : 'black',
        }),
        labels: {
          value: {
            formatter: (params) => `${params.datum.change.toFixed(2)}%`,
          },
        },
      },
    ],
    // title: {
    //   text: 'S&P 500 index stocks categorized by sectors and industries.',
    // },
    // subtitle: {
    //   text: 'Area represents market cap. Color represents color from the day before.',
    // },
  };
  return (
    <div id="chart" width="100%" height="100%">
      <AgChartsReact options={options} />
    </div>
  );
};
export default TreeMaps;
