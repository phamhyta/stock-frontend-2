import React, { useEffect, useRef, useState } from 'react';
import TopPriceIncrease from './TopPriceIncrease';
import TopDiscount from './TopDiscount';

const MarketMovements = (props) => {
  const { mode } = props;
  const [topPrice, setTopPrice] = useState(1);
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return (
    <div className="w-full" ref={elRef} style={{ overflow: 'auto' }}>
      <div
        className="flex market-moment my-10"
        style={{ whiteSpace: 'nowrap' }}
      >
        <div className="w-5/12 mr-4 p-4 rounded-lg shadow-md items">
          {topPrice === 2 && <TopDiscount mode={mode} />}
          {topPrice === 1 && <TopPriceIncrease mode={mode} />}
          <div className="flex justify-center items-center mt-4">
            <div
              className={`w-3 h-3  rounded-full ml-1 ${
                topPrice === 2 ? 'bg-slate-100' : 'bg-slate-400'
              }`}
              onClick={() => setTopPrice(1)}
            ></div>
            <div
              className={`w-3 h-3  rounded-full ml-1 ${
                topPrice === 2 ? 'bg-slate-400' : 'bg-slate-100'
              }`}
              onClick={() => setTopPrice(2)}
            ></div>
          </div>
        </div>
        <div className="w-5/12 mr-4 p-4 rounded-lg shadow-md items">
          <TopDiscount mode={mode} />
        </div>
        <div className="w-5/12 mr-4 p-4 rounded-lg shadow-md items">
          <TopPriceIncrease mode={mode} />
        </div>
        <div className="w-5/12 p-4 rounded-md shadow-lg items">
          <TopPriceIncrease mode={mode} />
        </div>
      </div>
    </div>
  );
};

export default MarketMovements;
