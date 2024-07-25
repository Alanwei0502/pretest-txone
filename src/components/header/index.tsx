import React from 'react';
import Logo from './Logo';
import UserInfoMenu from './UserInfoMenu';

const Header: React.FC = () => {
  return (
    <header className='bg-white flex justify-between items-center shadow-header-shadow h-16 p-8 relative z-10'>
      <Logo />
      <UserInfoMenu />
    </header>
  );
};

export default Header;
