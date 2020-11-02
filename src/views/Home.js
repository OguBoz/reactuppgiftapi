import React, {useState, useEffect, useContext}  from 'react'
import Navbar from '../components/Navbar';
import { PokemonContext } from '../App';

export default function Home() {
    var username = localStorage.getItem("username");

    const { pokemons, setPokemons } = useContext(PokemonContext);

    useEffect(() => {
      // Only fetch the data if the user is logged in
      if(loggedIn())
          fetchData();
    }, [pokemons]);

    // Function for fetching data
    const fetchData = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then(results => results.json())
      .then(data => {
        setPokemons(data.results);
      });
    }

    const loggedIn = () => {
        if(username != "" && username != null) {
          return true
        } else {
           return false
        }
      }

      const displayContent = () => {
          if(loggedIn()) {
              return (
                <section className="section">
                <div className="container">
                <h1 className="title">Welcome { username }</h1>
                  <h2 className="subtitle">
                   You are now signed in
                  </h2>
              { pokemons.length > 1 && pokemons.map((pokemon, index) => <p key={index}><strong>Name: </strong>{ pokemon.name } - <strong>Link: </strong> <a href={pokemon.url}>{pokemon.url}</a></p>) }
                </div>
              </section>
              )
          } else {
              return (
                <section className="section">
                <div className="container">
                  <h1 className="title">Welcome!</h1>
                  <h2 className="subtitle">
                   You can sign in using the link above
                  </h2>
                </div>
              </section>
              )
          }
      }

    return (
        <>
            <Navbar loggedin = {loggedIn()} />
            { displayContent()  }
        </>
    )
}
