import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import locationIcon from '@/assets/location.svg';
import loadingIcon from '@/assets/loading.svg';

const tickInterval = 10000;
const tickFormatter = (value: number) => `${value / 1000}K`;

interface BirthRateChartProps {}

const BirthRateChart: React.FC<BirthRateChartProps> = () => {
  const [data, setData] = useState<IAnnualPopulationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const totalY = [...data.map((d) => d.male), ...data.map((d) => d.female)];
  const maxY = Math.ceil(Math.max(...totalY) / tickInterval) * tickInterval;
  const minY = Math.floor(Math.min(...totalY) / tickInterval) * tickInterval;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = [
        { year: '2015', male: 104752, female: 96771 },
        { year: '2016', male: 102046, female: 94827 },
        { year: '2017', male: 95090, female: 88352 },
        { year: '2018', male: 88146, female: 82426 },
        { year: '2019', male: 87291, female: 80920 },
        { year: '2020', male: 81634, female: 75673 },
        { year: '2021', male: 77117, female: 72201 },
        { year: '2022', male: 68164, female: 63444 },
      ];
      setData(data);
      setIsLoading(false);
    }, 1000);
  }, [setData]);

  return (
    <div className='max-w-[542px] h-[447px] rounded-lg py-9 px-8 border-gray-400 border bg-white'>
      {isLoading ? (
        <div className='text-black w-full h-full flex items-center justify-center'>
          <img src={loadingIcon} alt='loading icon' width={64} height={64} />
        </div>
      ) : (
        <>
          <div className='flex justify-between'>
            <h2 className='text-xl font-semibold mb-4 flex gap-1 items-center text-primary'>
              <img
                src={locationIcon}
                alt='location icon'
                width={20}
                height={20}
              />
              Birth in Taiwan
            </h2>
            <div className='text-sm text-gray-500'>
              source: Ministry of the Interior
            </div>
          </div>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey='year'
                axisLine={false}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
                tick={{ fill: '#000000' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[minY, maxY]}
                tickCount={(maxY - minY) / tickInterval + 1}
                tickFormatter={tickFormatter}
                tick={{ fill: '#000000' }}
              />
              <Tooltip />
              <Legend iconType='plainline' iconSize={60} />
              <Line dataKey='male' stroke='#80B4FF' />
              <Line dataKey='female' stroke='#E86997' />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default BirthRateChart;
