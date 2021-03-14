import React, {useState,useEffect} from 'react';
import './App.css';
import VaccineTracker from './Components/Pages/VaccineTracking/vaccineTracker'
import {Button,ThemeProvider,createMuiTheme} from '@material-ui/core'
//import {Button} from '@material-ui/icons'


function App() {

  const VACCINEOP = 'vac';
  const TESTOP = 'test';
  const CASEOP = 'case'

  const [select,setSelect] = useState(VACCINEOP);

  const theme = createMuiTheme({
    overrides : {
      MuiButton: {
        text: {
          color: '#FFFF'
        },
        outlinedSecondary : {
          
          backgroundColor : '#FFFFF',
          color : 'white'
        }
      }
    }
  })

  return (
    <div className="App">
      
      <header className="App-header">
          <h1 >COVID-19 Vaccine Tracker</h1>
      </header>
      <ThemeProvider>
      <div className = "NavButtonGrid">
          <Button variant = {select === VACCINEOP ? 'contained' : 'outlined'} color = 'primary' onClick = {()=> setSelect(VACCINEOP)} className = "NavButtons">Vaccines </Button>
          <Button variant = {select === CASEOP ? 'contained' : 'outlined'} color = 'primary' onClick = {()=> setSelect(CASEOP)} className = "NavButtons">Cases</Button>
          <Button variant = {select === TESTOP ? 'contained' : 'outlined'} color = 'primary' onClick = {()=> setSelect(TESTOP)} className = "NavButtons">Testing</Button>
       </div>
      {
         select === VACCINEOP ? <VaccineTracker /> :
         select === CASEOP ? <p>cases</p> : <p>test</p>
       }
      </ThemeProvider>
    </div>
  );
}

export default App;
