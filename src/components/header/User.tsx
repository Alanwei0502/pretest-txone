import React, { useState } from 'react';
import avatarIcon from '@/assets/avatar.svg';
import arrowIcon from '@/assets/arrow.svg';
import { Link } from 'react-router-dom';

const User: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdownMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className='select-none'>
      <div
        className='flex gap-4 cursor-pointer'
        onClick={handleToggleDropdownMenu}
      >
        <img src={avatarIcon} alt='avatar' className='w-6 h-6 md:w-5 md:h-5' />
        <p className='hidden md:block'>Alan</p>
        <img
          src={arrowIcon}
          alt='arrow'
          className={`hidden md:block transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`border absolute top-full right-0 ${open ? '' : 'hidden'}`}
      >
        <ul className='bg-white text-center'>
          <li>
            <Link
              className='hover:bg-gray-100 cursor-pointer px-10 py-2 block'
              to='/profile'
              onClick={handleToggleDropdownMenu}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
