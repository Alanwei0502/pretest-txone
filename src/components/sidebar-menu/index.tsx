import React from 'react';
import { useLocation } from 'react-router-dom';
import { PATH } from '@/routes/path';
import MenuItem from '@/components/sidebar-menu/MenuItem';
import menuPopulationIcon from '@/assets/menu-population.svg';
import menuSunIcon from '@/assets/menu-sun.svg';

const menuItems = [
  {
    to: PATH.TODAY_WEATHER,
    label: "Today's Weather",
    icon: menuSunIcon,
  },
  {
    to: PATH.POPULATION,
    label: 'Population',
    icon: menuPopulationIcon,
  },
];

interface SibarMenuProps {
  isShowMobileMenu: boolean;
  setIsShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SibarMenu: React.FC<SibarMenuProps> = (props) => {
  const { isShowMobileMenu, setIsShowMobileMenu } = props;
  const location = useLocation();

  return (
    <nav
      className={`border-r-[1px] border-r-gray-200 bg-white h-screen-minus-header transition-transform absolute z-10 ${
        isShowMobileMenu ? '' : '-translate-x-full'
      } md:static md:translate-x-0`}
    >
      <ul className='pt-10'>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            to={item.to}
            icon={item.icon}
            active={location.pathname.includes(item.to)}
            setIsShowMobileMenu={setIsShowMobileMenu}
          >
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default SibarMenu;
