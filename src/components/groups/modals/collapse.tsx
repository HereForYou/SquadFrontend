import React, { useState } from 'react'; 
import { Icon } from '@iconify/react';
interface CollapseInterface  {
    title: string,
    children: React.ReactNode
}

const Collapse = ({ title, children }: CollapseInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md">
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg">{title}</h3>
        <span className='relative'>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg> */}
          <Icon className='absolute' icon="fe:minus" />
          <Icon icon="fe:minus" className={`absolute transition-transform duration-300 ${!isOpen ? 'rotate-90' : ''}`}/>
        </span>
      </div>
      <div
        className={`px-4 transition-max-height duration-300 ${
          isOpen ? 'max-h-auto' : '!h-0 overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
