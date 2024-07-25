import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <h2 className='text-4xl w-fit mb-10'>Welcome to Analysis.dev 🎉</h2>
      <div className='p-6'>
        <div className='text-gray-700 space-y-4'>
          <p>
            Here you can analyze the weather patterns and trends of various
            cities around the world. 🌎🌍🌏
          </p>
          <p>
            Use the navigation menu to check today's weather or population data
            for different locations. 🗺️🌡️
          </p>
          <p>
            Our new feature allows you to analyze birth data trends in Taiwan,
            including separate data for males and females. 👶📈
          </p>
          <p>
            Stay informed with the latest weather updates and demographic trends
            at your fingertips. With our easy-to-use interface, you can quickly
            access the information you need. 📅📊
          </p>
          <p>
            Whether you're a researcher, a student, or just someone curious
            about weather and population data, Analysis.dev provides accurate
            and up-to-date information. 📚🔍
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
