import React, { useEffect, useState, createContext, useContext  } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Navbar from './components/Navbar';

// Global context for pokemons
export const PokemonContext = createContext({
  pokemons: [],
  setPokemons: () => {}
});


function App() {
  var username = localStorage.getItem("username");

  const [values, setValues] = useState({username: ''})
  const [pokemons, setPokemons] = useState([])
  const value = { pokemons, setPokemons }


  useEffect(() => {
    setValues({username : username})
  }, [username])

  const loggedIn = () => {
    if(values.username !== "" && values.username !== null) {
      return true
    } else {
       return false
    }
  }

  return (
    <PokemonContext.Provider value={value}>
    <Router>
      <Routes />
    </Router>
    </PokemonContext.Provider>
  );
}

export default App;
