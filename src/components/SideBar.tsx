import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 flex flex-col w-16 h-screen m-0 text-white bg-gray-900 shadow-lg'>
      <SideBarIcon icon={<FaFire size='28' />} text='Home' />
      <Divider />
      <SideBarIcon icon={<BsPlus size='32' />} text='Add a server' />
      <SideBarIcon icon={<BsFillLightningFill size='20' />} text='Server 1' />
      <SideBarIcon icon={<FaPoo size='20' />} text='Server 2' />
      <Divider />
      <SideBarIcon icon={<BsGearFill size='22' />} text='Settings' />
    </div>
  );
};

export default SideBar;

interface SideBarIconType {
  icon: React.JSX.Element;
  text: string;
}

const SideBarIcon = ({ icon, text }: SideBarIconType) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
);

const Divider = () => <hr className='sidebar-hr' />;
