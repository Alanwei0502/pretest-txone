import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './path';
import Home from '@/pages/home';
import ErrorPage from '@/pages/error';
import WeatherForecastPage from '@/pages/today-weather';
import PopulationPage from '@/pages/population';
import App from '@/Layout';

const appRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
