// src/components/Divider.tsx

import React from 'react';

type DividerProps = {
  width?: string;
};
const Divider = ({ width = 'w-full' }: DividerProps) => {
  return (
    <div className={`w-full my-8`}>
      <div
        className={`h-1 mx-auto bg-primary ${width} my-0 py-0 rounded`}
      ></div>
    </div>
  );
};

export default Divider;

