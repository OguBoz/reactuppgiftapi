import React from 'react'
import Navbar from '../components/Navbar';


export default function Home() {
    var username = localStorage.getItem("username");


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
