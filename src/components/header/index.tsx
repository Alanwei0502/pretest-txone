import React from 'react';
import Logo from './Logo';
import User from './User';
import Menu from './Menu';

interface HeaderProps {
  setIsShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { setIsShowMobileMenu } = props;

  return (
    <header className='bg-white flex justify-between items-center shadow-header-shadow h-16 p-2 z-20 sticky top-0 md:p-8'>
      <Logo />
      <div className='flex items-center gap-x-6'>
        <User />
        <Menu setIsShowMobileMenu={setIsShowMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
