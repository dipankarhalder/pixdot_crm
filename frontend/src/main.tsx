import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import { routers } from '@routes';
import { theme } from '@styles/theme';
import { GlobalDetails } from '@styles/globals';

const root = document.getElementById('root');
const errmsg = "Root element with ID 'root' not found in the document.";

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
