import React from 'react';

const Products = ({ label, active, onClick }) => {
  return (
    <button
      className={`ml-10 md:p-14  md:py-2 md:text-base  font-semibold ${active ? 'bg-[#F1C40F] rounded-[80px] ' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Products;