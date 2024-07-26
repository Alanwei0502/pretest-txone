import React, { useCallback, useEffect, useState } from 'react';
import { getLocalTime } from '@/utils';
import locationIcon from '@/assets/location.svg';
import humidityIcon from '@/assets/humidity.svg';
import temperatureIcon from '@/assets/temperature.svg';
import loadingIcon from '@/assets/loading.svg';
import cloudyIcon from '@/assets/cloudy.svg';
import rainIcon from '@/assets/rain.svg';
import clearDayIcon from '@/assets/clear-day.svg';
import OpenWeather from '@/apis/openWeather.api';

const weatherIcon: { [key in WeatherCondition['icon']]: string } = {
  '01d': clearDayIcon,
  '01n': clearDayIcon,
  '02d': cloudyIcon,
  '02n': cloudyIcon,
  '03d': cloudyIcon,
  '03n': cloudyIcon,
  '04d': cloudyIcon,
  '04n': cloudyIcon,
  '09d': rainIcon,
  '09n': rainIcon,
  '10d': rainIcon,
  '10n': rainIcon,
};

interface WeatherCardProps {
  city: string;
  country: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  const { city, country, setErrorMsg } = props;

  const [cityInfo, setCity] = useState<GetCityInfoResponse[0]>();
  const [weather, setWeather] = useState<GetWeatherResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const isNoData = !cityInfo || !weather;

  const setData = useCallback(
    async (cityInfo: GetCityInfoResponse[0]) => {
      if (!cityInfo) {
        setErrorMsg('Not found the city or the country.');
        setCity(undefined);
        setWeather(undefined);
        return;
      }
      const weather = await OpenWeather.getCurrentWeather({
        lat: cityInfo.lat,
        lon: cityInfo.lon,
      });
      setCity(cityInfo);
      setWeather(weather);
    },
    [setErrorMsg]
  );

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        OpenWeather.getCityInfoByCoords({
          lat: latitude,
          lon: longitude,
        })
          .then((cities) => setData(cities[0]))
          .catch((err) => setErrorMsg(err.message))
          .finally(() => setIsLoading(false));
      },
      () => {
        alert('Please allow location access');
        setIsLoading(false);
      }
    );
  }, [setData, setErrorMsg]);

  useEffect(() => {
    if (!city && !country) return;
    setIsLoading(true);
    let q = `${city},${country}`;
    q = q.charAt(0) === ',' ? q.slice(1) : q;
    q = q.charAt(q.length - 1) === ',' ? q.slice(0, -1) : q;

    OpenWeather.getCityInfo({ q })
      .then((cities) => setData(cities[0]))
      .catch((err) => setErrorMsg(err.message))
      .finally(() => setIsLoading(false));
  }, [city, country, setData, setErrorMsg]);

  return (
    <div className='rounded-lg text-primary bg-white w-full border-gray-400 border p-8 min-h-[400px] relative'>
      {isLoading ? (
        <div className='text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <img src={loadingIcon} alt='loading icon' width={64} height={64} />
        </div>
      ) : isNoData ? (
        <div className='text-black w-full h-full flex items-center justify-center'>
          No Data
        </div>
      ) : (
        <>
          <div className='flex justify-between'>
            <div className='flex'>
              <img
                src={locationIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              <span className='ml-1 text-xl font-semibold'>
                {cityInfo.name}
              </span>
            </div>
            <div>
              <span className='mr-1'>Today</span>
              {getLocalTime(new Date(), weather.timezone).toLocaleTimeString()}
            </div>
          </div>
          <div className='flex gap-x-3 items-center justify-center my-20'>
            {weatherIcon[weather.weather[0].icon] ? (
              <img
                src={weatherIcon[weather.weather[0].icon]}
                alt='weather icon'
                width={128}
                height={128}
              />
            ) : (
              <p className='text-7xl'>N/A</p>
            )}
            <div className='flex flex-col gap-x-0.5'>
              <span className='text-6xl font-medium'>
                {weather.main.temp.toFixed(0)}°C
              </span>
              <span className='text-2xl'>{weather.weather[0].main}</span>
              <span>{weather.weather[0].description}</span>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex'>
              <img
                src={humidityIcon}
                alt='humidity icon'
                width={20}
                height={20}
              />
              <span className='ml-1'>
                Humidity: {weather.main.humidity.toFixed(0)}%
              </span>
            </div>
            <div className='flex'>
              <img
                src={temperatureIcon}
                alt='temperature icon'
                width={20}
                height={20}
              />
              <span className='ml-1'>
                Temperature {weather.main.temp_min.toFixed(0)}°C ~{' '}
                {weather.main.temp_max.toFixed(0)}°C
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
