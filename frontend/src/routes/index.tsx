/** Modules */
import { createBrowserRouter } from 'react-router-dom';

/** Routes */
import { paths } from '@pathroute/paths';

/** Pages */
import { LoginPage } from '@pages/login';
import { RegisterPage } from '@pages/register';
import { ForgotPage } from '@pages/forgot';

/** Render routers */
export const routers = createBrowserRouter([
  {
    path: paths.login,
    element: <LoginPage />,
  },
  {
    path: paths.register,
    element: <RegisterPage />,
  },
  {
    path: paths.forgot,
    element: <ForgotPage />,
  },
]);
