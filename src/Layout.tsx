import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';

function Layout() {
  return (
    <>
      <Header />
      <div className='flex h-screen-minus-header w-full'>
        <Menu />
        <main className='flex-grow-1 p-10 bg-transparent'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
