import { PATH } from '@/routes/path';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to={PATH.HOME} aria-label='logo' className='flex gap-3'>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-7'
      >
        <g clipPath='url(#clip0_2_42)'>
          <path
            d='M16.25 3.625V20.125C16.25 21.9713 17.5237 23 18.875 23C20.125 23 21.5 22.125 21.5 20.125V3.75C21.5 2.0575 20.25 1 18.875 1C17.5 1 16.25 2.16625 16.25 3.625Z'
            fill='#16538E'
            fillOpacity='0.6'
          />
          <path
            d='M9.375 12V20.125C9.375 21.9713 10.6487 23 12 23C13.25 23 14.625 22.125 14.625 20.125V12.125C14.625 10.4325 13.375 9.375 12 9.375C10.625 9.375 9.375 10.5412 9.375 12Z'
            fill='#16538E'
            fillOpacity='0.8'
          />
          <path
            d='M5.125 23C6.57475 23 7.75 21.8247 7.75 20.375C7.75 18.9253 6.57475 17.75 5.125 17.75C3.67525 17.75 2.5 18.9253 2.5 20.375C2.5 21.8247 3.67525 23 5.125 23Z'
            fill='#16538E'
          />
        </g>
        <defs>
          <clipPath id='clip0_2_42'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
      <h1 className='text-2xl'>
        Analysis<span className='text-base opacity-60'>.dev</span>
      </h1>
    </Link>
  );
};

export default Logo;