import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './path';
import ErrorPage from '../pages/error';
import WeatherForecastPage from '../pages/today-weather';
import PopulationPage from '../pages/population';
import Layout from '../Layout';
import Home from '@/pages/home';

const appRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.TODAY_WEATHER,
        element: <WeatherForecastPage />,
      },
      {
        path: PATH.POPULATION,
        element: <PopulationPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default appRouter;
