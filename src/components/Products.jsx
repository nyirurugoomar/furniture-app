import React from 'react';

const Products = ({ label, active, onClick }) => {
  return (
    <button
      className={`ml-4 md:p-10  md:py-2  font-semibold ${active ? 'bg-[#F1C40F] rounded-[80px] ' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Products;