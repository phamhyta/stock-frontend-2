import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'IOP 3.72%',
    children: [
      { name: 'SSI 3.16%', size: 1302, fill: '#0065FF' },
      { name: 'VND 3.72%', size: 24593, fill: '#00BF71' },
      { name: 'SSI 3.16%', size: 652, fill: '#0065FF' },
      { name: 'IOP 3.72%', size: 636, fill: '#0065FF' },
      { name: 'VND 3.72%', size: 6703, fill: '#0065FF' },
    ],
    fill: '#0065FF',
  },
  {
    name: 'IOP 3.72%',
    children: [
      { name: 'VIX 1.22%', size: 2138, fill: '#00BF71' },
      { name: 'SSI 3.16%', size: 3824, fill: '#E2DA2F' },
      { name: 'VND 3.72%', size: 1353, fill: '#00BF71' },
      { name: 'SSI 3.16%', size: 4665, fill: '#0065FF' },
      { name: 'VIX 1.22%', size: 2649, fill: '#00BF71' },
      { name: 'VND 3.72%', size: 2832, fill: '#00BF71' },
      { name: 'HJK 1.23%', size: 4896, fill: '#00BF71' },
      { name: 'SSI 3.16%', size: 763, fill: '#0065FF' },
      { name: 'VIX 1.22%', size: 5222, fill: '#00BF71' },
      { name: 'VND 3.72%', size: 7862, fill: '#00BF71' },
      { name: 'VIX 1.22%', size: 8435, fill: '#0065FF' },
    ],
    fill: '#00BF71',
  },
  {
    name: 'IOP 3.72%',
    children: [
      { name: 'STB 0.00%', size: 20544, fill: '#0065FF' },
      { name: 'SSI 3.16%', size: 19788, fill: '#00BF71' },
      { name: 'VPB 3.32%', size: 10349, fill: '#E2DA2F' },
      { name: 'VIX 1.97%', size: 3301, fill: '#0065FF' },
      { name: 'TPB 1.69%', size: 19382, fill: '#0065FF' },
      {
        name: 'IOP 3.72%',
        children: [
          { name: 'HJK 1.23%', size: 698, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 5569, fill: '#0065FF' },
          { name: 'SSI 3.16%', size: 353, fill: '#00BF71' },
          { name: 'VND 3.72%', size: 2247, fill: '#E2DA2F' },
        ],
        fill: '#00BF71',
      },
      { name: 'IOS 1.72%', size: 11275, fill: '#0065FF' },
      { name: 'VND 3.72%', size: 7147, fill: '#00BF71' },
      { name: 'IOP 3.72%', size: 9930, fill: '#E2DA2F' },
    ],
    fill: '#E2DA2F',
  },
  {
    name: 'IOP 3.72%',
    children: [
      { name: 'SSI 3.16%', size: 7313, fill: '#0065FF' },
      { name: 'VND 3.72%', size: 6880, fill: '#F04438' },
      { name: 'VIX 1.22%', size: 3701, fill: '#0065FF' },
      { name: 'HJK 1.23%', size: 2117, fill: '#00BF71' },
    ],
    fill: '#00BF71',
  },
  {
    name: 'IOP 3.72%',
    children: [
      { name: 'USB 0.72%', size: 20859, fill: '#0065FF' },
      { name: 'VND 3.72%', size: 4614, fill: '#F04438' },
      { name: 'HJK 1.23%', size: 10530, fill: '#0065FF' },
    ],
    fill: '#F04438',
  },
  {
    name: 'IOP 3.72%',
    children: [
      {
        name: 'IOP 3.72%',
        children: [
          { name: 'VND 3.72%', size: 4461, fill: '#00BF71' },
          { name: 'HJK 1.23%', size: 6314, fill: '#F04438' },
          { name: 'VIX 1.22%', size: 3444, fill: '#00BF71' },
        ],
        fill: '#F04438',
      },
      {
        name: 'IOP 3.72%',
        children: [
          { name: 'VND 3.72%', size: 3179, fill: '#00BF71' },
          { name: 'HJK 1.23%', size: 4060, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 4138, fill: '#00BF71' },
          { name: 'VND 3.72%', size: 1690, fill: '#F04438' },
          { name: 'VIX 1.22%', size: 1830, fill: '#00BF71' },
        ],
        fill: '#00BF71',
      },
      {
        name: 'IOP 3.72%',
        children: [
          { name: 'VND 3.72%', size: 5219, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 3165, fill: '#00BF71' },
          { name: 'HJK 1.23%', size: 3509, fill: '#F04438' },
        ],
        fill: '#00BF71',
      },
      { name: 'IOP 3.72%', size: 1286, fill: '#00BF71' },
      {
        name: 'IOP 3.72%',
        children: [
          { name: 'VIX 1.22%', size: 9956, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 3899, fill: '#E2DA2F' },
          { name: 'VND 3.72%', size: 3202, fill: '#0065FF' },
        ],
        fill: '#00BF71',
      },
      {
        name: 'IOP 3.72%',
        children: [
          { name: 'IOP 3.72%', size: 6725, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 3727, fill: '#E2DA2F' },
          { name: 'IOP 3.72%', size: 9317, fill: '#00BF71' },
          { name: 'VND 3.72%', size: 12003, fill: '#00BF71' },
          { name: 'IOP 3.72%', size: 4853, fill: '#0065FF' },
          { name: 'HJK 1.23%', size: 8411, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 4864, fill: '#00BF71' },
          { name: 'VND 3.72%', size: 3174, fill: '#00BF71' },
          { name: 'VND 3.72%', size: 7881, fill: '#00BF71' },
          { name: 'HJK 1.23%', size: 12870, fill: '#0065FF' },
          { name: 'VIX 1.22%', size: 2728, fill: '#00BF71' },
          { name: 'VIX 1.22%', size: 12348, fill: '#00BF71' },
          { name: 'VND 3.72%', size: 870, fill: '#E2DA2F' },
          { name: 'VIX 1.22%', size: 9121, fill: '#00BF71' },
          { name: 'IOP 3.72%', size: 9191, fill: '#00BF71' },
        ],
        fill: '#00BF71',
      },
      { name: 'HJK 1.23%', size: 2490, fill: '#E2DA2F' },
      { name: 'VIX 1.22%', size: 5248, fill: '#0065FF' },
      { name: 'VND 3.72%', size: 4190, fill: '#E2DA2F' },
      { name: 'VIX 1.22%', size: 2581, fill: '#00BF71' },
      { name: 'IOP 3.72%', size: 2023, fill: '#0065FF' },
    ],
    fill: '#00BF71',
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
        fill={data.fill}
      />
    </ResponsiveContainer>
  );
};
export default TreeMaps;
