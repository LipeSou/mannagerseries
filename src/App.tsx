import React, { useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CardSeries from './components/CardSeries/CardSeries';
import { backgroundPrimary, darkTheme, secundary } from './global/themes';
import axios from 'axios';
import { urlHeroku } from './global/urls';
import { ISeries } from './interfaces/series';
import HeaderSeries from './components/HeaderSeries/HeaderSeries';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import './App.css'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${backgroundPrimary};
    font-family: Roboto, Helvetica, Sans-Serif;
    color: white;
    height: 100vh;
    width: 100vw;
  }
`;


const App = () => {
  const [series, setSeries] = useState<Array<ISeries>>()
  useEffect(() => {
    axios.get(urlHeroku)
      .then((res) => setSeries(res.data))
      .catch((err) => { console.log(err) })
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <HeaderSeries />
        {series ? series.map((serie) => {
          return <CardSeries serie={serie} key={serie.id} />
        }) :
          (
            <div className='container'>
              <div className="pai">
                <div className="object">
                  <MovieFilterIcon sx={{ fontSize: 200, color: secundary }} />
                </div>
              </div>
            </div>


          )}
      </ThemeProvider>
    </>
  );
}

export default App;
