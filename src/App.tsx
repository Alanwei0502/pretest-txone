import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import SibarMenu from '@/components/sidebar-menu';
import { useState } from 'react';

function App() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <>
      <Header setIsShowMobileMenu={setIsShowMobileMenu} />
      <div className='flex h-screen-minus-header w-full'>
        <SibarMenu
          isShowMobileMenu={isShowMobileMenu}
          setIsShowMobileMenu={setIsShowMobileMenu}
        />
        <main className='flex-grow-1 bg-transparent px-2 py-4 md:p-10'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
