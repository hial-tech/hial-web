import {BrowserRouter} from 'react-router';
import AppRoutes from '@/AppRoutes';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from '@/utils/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
