import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import SibarMenu from '@/components/sidebar-menu';

function App() {
  return (
    <>
      <Header />
      <div className='flex h-screen-minus-header w-full'>
        <SibarMenu />
        <main className='flex-grow-1 p-10 bg-transparent'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
