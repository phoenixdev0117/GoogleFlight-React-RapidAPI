import { useState } from "react";
import GoogleDatePicker from "../../components/GoogleDatePicker";
import SkySearchForm from "../../components/SkySearchForm";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Create themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDarkMode ? darkTheme : lightTheme;

  return (
    <div className="flex w-full h-full mb-4">
      <div className="w-1/6 h-[100vh]" />
      <div className="w-5/6 flex flex-col justify-center items-center gap-4" style={{ background: '#fff', boxShadow: 'inset 0 0 5px 0 #989898' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SkySearchForm />
        </ThemeProvider>
      </div>
    </div >
  );
};

export default Home;