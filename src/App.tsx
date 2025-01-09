import AppRoutes from '@/AppRoutes';
import theme from '@/utils/theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {HashRouter} from 'react-router';

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
