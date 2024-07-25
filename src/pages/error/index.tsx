import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div
      id='error-page'
      className='h-full flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl font-bold'>Oops! 😅</h1>
      <p className='text-xl mt-6'>
        Looks like our website took an unexpected vacation. 🌴 ✨
      </p>
      <p className='text-xl'>
        Don't worry, we've sent a search party with snacks 🍪 to bring it back!
        🚀
      </p>
    </div>
  );
};

export default ErrorPage;
