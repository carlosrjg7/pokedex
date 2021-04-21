import React from 'react'
import Header from './components/Header'
import Lista from './components/Lista'
import Modal from './components/Modal'
import ModalProvider from './context/ModalContext'
import PokeProvider from './context/PokeContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Evoluciones from './components/evoluciones/Evoluciones'
import Navbar from './components/navbar/Navbar'


function App() {
  
  return (
    <Router>
      <PokeProvider>
        <ModalProvider>

          <Switch>
            <Route path="/" exact>
              <Header />
              <Lista />
              <Modal/> 
            </Route>
            <Route path={`/detalle/:id`} >
              <Navbar/>
              <Evoluciones/>
            </Route>

          </Switch>
        </ModalProvider>
      </PokeProvider> 
    </Router> 
  );
}

export default App;
