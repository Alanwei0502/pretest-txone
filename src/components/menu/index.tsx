import React from 'react';
import { useLocation } from 'react-router-dom';
import { PATH } from '@/routes/path';
import MenuItem from '@/components/menu/MenuItem';
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

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <nav className='border-r-[1px] border-r-gray-200 bg-white'>
      <ul className='pt-10'>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            to={item.to}
            icon={item.icon}
            active={location.pathname.includes(item.to)}
          >
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
