import React, { useState } from 'react';
import Tab from './Products';

const product = [
  { label: 'All', id: 1 },
  { label: 'Living Room', id: 2 },
  { label: 'Bedroom', id: 3 },
  { label: 'Dining Room', id: 4 },
  { label: 'Home Office', id: 5 },
  
];

const ProductContainer = () => {
    const [activeTab, setActiveTab] = useState(product[0].id);
  
    const handleTabClick = (id) => {
      setActiveTab(id);
    };
  
    return (
      <div className="text-center  border-gray-200 rounded-lg">
        <div className="flex items-center">
          {product.map((product) => (
            <Tab
              key={product.id}
              label={product.label}
              active={activeTab === product.id}
              onClick={() => handleTabClick(product.id)}
            />
          ))}
        </div>
        <div className='mt-20 text-blue-600'>
          {activeTab === 1 && <div>ALL</div>}
          {activeTab === 2 && <div>Living Room</div>}
          {activeTab === 3 && <div>Bedroom</div>}
          {activeTab === 4 && <div>Dining Room</div>}
          {activeTab === 5 && <div>Home Office</div>}
          
        </div>
      </div>
    );
  };

  export default ProductContainer;