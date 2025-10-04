import { createBrowserRouter } from 'react-router-dom';

const Home = () => <div>Home</div>;

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
