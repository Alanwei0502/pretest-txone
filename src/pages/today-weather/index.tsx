import React, { useState } from 'react';
import TextField from '@/components/textField';
import Button from '@/components/button';
import WeatherCard from './WeatherCard';

const TodayWeatherPage: React.FC = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [searchParams, setSearchParams] = useState({ city: '', country: '' });

  const handleSearch = () => {
    if (!city && !country) return;
    setSearchParams({ city, country });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section className='w-fit pb-10'>
      <h1 className='text-4xl w-fit'>Today's Weather 🌤️</h1>
      <div className='mt-10 mb-2'>
        <div className='flex gap-x-3.5 gap-y-2 flex-wrap'>
          <TextField
            label='City'
            id='city'
            className='max-w-[132px]'
            value={city}
            isError={Boolean(errorMsg)}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setCity(e.target.value);
              setErrorMsg('');
            }}
          />
          <TextField
            label='Country'
            id='country'
            className='max-w-[132px]'
            value={country}
            isError={Boolean(errorMsg)}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setCountry(e.target.value);
              setErrorMsg('');
            }}
          />
          <Button
            className='w-[138px]'
            onClick={handleSearch}
            disabled={!city && !country}
          >
            Search
          </Button>
        </div>
        <p className={`text-red-500 h-6  ${errorMsg ? '' : 'opacity-0'}`}>
          {errorMsg}
        </p>
      </div>
      <WeatherCard
        city={searchParams.city}
        country={searchParams.country}
        setErrorMsg={setErrorMsg}
      />
    </section>
  );
};

export default TodayWeatherPage;
