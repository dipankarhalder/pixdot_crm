/** Modules */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

/** Routes and global styles */
import { routers } from '@routes';
import { theme } from '@styles/theme';
import { GlobalDetails } from '@styles/globals';

/** Important variables */
const root = document.getElementById('root');
const errmsg = "Root element with ID 'root' not found in the document.";

/** Render root component or error */
if (root) {
  const rootReturn = createRoot(root);
  rootReturn.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalDetails />
        <RouterProvider router={routers} />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  throw new Error(errmsg);
}
