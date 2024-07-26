import React from 'react';
import BirthRateChart from './BirthRateChart';

const PopulationPage: React.FC = () => {
  return (
    <>
      <h2 className='text-4xl w-fit mb-2 md:mb-10'>Population 📊</h2>
      <BirthRateChart />
    </>
  );
};

export default PopulationPage;
