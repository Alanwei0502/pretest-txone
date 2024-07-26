import React from 'react';
import menuIcon from '@/assets/menu.svg';

interface MenuProps {
  setIsShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { setIsShowMobileMenu } = props;

  const handleClickMenu = () => {
    setIsShowMobileMenu((prev) => !prev);
  };

  return (
    <img
      src={menuIcon}
      alt='menu'
      className='w-8 h-8 md:hidden'
      onClick={handleClickMenu}
    />
  );
};

export default Menu;
