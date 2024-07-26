import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface MenuItemProps
  extends LinkProps,
    React.RefAttributes<HTMLAnchorElement> {
  icon?: string;
  active?: boolean;
  setIsShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, children, active, setIsShowMobileMenu, ...restProps } = props;

  const handleCloseMobileMenu = () => {
    setIsShowMobileMenu(false);
  };

  return (
    <li className='cursor-pointer'>
      <Link
        {...restProps}
        className={`px-8 py-4 flex gap-3 border-r-4 hover:bg-gray-100  ${
          active
            ? 'bg-primary-100 border-r-4 border-primary'
            : 'opacity-40 border-transparent'
        }`}
        onClick={handleCloseMobileMenu}
      >
        <img src={icon} alt='icon' />
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
