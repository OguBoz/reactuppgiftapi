import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
    var username = localStorage.getItem("username");


    const loggedIn = () => {
        if(username != "" && username != null) {
          return true
        } else {
           return false
        }
      }


    return (
        <>
            <Navbar loggedin = {loggedIn()} />
            <section class="section">
                <div class="container">
                  <h1 class="title">About us</h1>
                  <h2 class="subtitle">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia eaque accusantium maxime quo nemo eos tempore nostrum amet veniam nam quibusdam soluta culpa vitae odio vero, repellat ea aspernatur laboriosam officiis sapiente voluptates necessitatibus! Velit possimus ad perspiciatis consequuntur non maxime ipsa labore culpa alias cupiditate. Dolorum dolore atque eaque, officia obcaecati voluptate. Laboriosam id eligendi odio totam sequi nulla molestias pariatur, error eveniet assumenda minus rem debitis blanditiis a eum asperiores minima iure repudiandae illum! Ratione dolor suscipit fugit repudiandae ipsa quibusdam consectetur ducimus sapiente blanditiis beatae, accusantium velit qui quaerat eos temporibus magnam eius sit ex accusamus laboriosam!
                  </h2>
                </div>
            </section>
        </>
    )
}
