import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import { routers } from '@routes';
import { theme } from '@themes';
import { GlobalDetails } from '@globals';

const root = document.getElementById('root');

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
  throw new Error("The document does not contain an element with the ID 'root'.");
}
