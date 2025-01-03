import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/loader.gif" alt="loader" width={150} height={150} />
    </div>
  );
};

export default Loader;
