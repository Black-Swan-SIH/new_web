import React from 'react';
import Heading from './Heading.jsx';

const Itemcount = ({ head, value}) => {
  return (
    <div>
      <Heading fontSize="14px" fontWeight={500} color="var(--text-color15)">
        {head}
      </Heading>
      <div className={`my-2 w-40 h-[0.8px] bg-gray-500`}></div>
      <Heading fontSize="30px" fontWeight={600} color="var(--text-color9)">
        {value}
      </Heading>
    </div>
  );
};

export default Itemcount;
