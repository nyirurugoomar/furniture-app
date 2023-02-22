import React, { useState } from 'react';
import All from './All';
import Bed from './Bed';
import DinningRoom from './DinningRoom';
import HomeOffice from './HomeOffice';
import LivingRoom from './LivingRoom';
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
      <div className=" border-gray-200 rounded-lg ">
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
        <div className=''>
          {activeTab === 1 && <div><All/></div>}
          {activeTab === 2 && <div><LivingRoom/></div>}
          {activeTab === 3 && <div><Bed/></div>}
          {activeTab === 4 && <div><DinningRoom/></div>}
          {activeTab === 5 && <div><HomeOffice/></div>}
          
        </div>
      </div>
    );
  };

  export default ProductContainer;