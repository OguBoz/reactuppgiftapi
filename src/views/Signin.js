import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from "react-router-dom";




export default function Signin() {
    let history = useHistory();

    const [values, setValues] = useState({username: '', password: '', error: false})


    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const onLoginAttempt = e => {
        e.preventDefault();

        let username = "oguz", password = "123";

        if(values.username === username && values.password == password) {
            localStorage.setItem("username", values.username);
            localStorage.setItem("password", values.password);
            setValues({username: '', password: '', error: false})
            history.push('/')
        } else 
        setValues({...values, error: true})
    }

    return (
        <>
        <Navbar loggedin = {false} />
            <div className="container">
                <div className="mt-5 columns is-centered is-8 is-variable">
                  <div className="column is-4-tablet is-3-desktop">
                    <form onSubmit={onLoginAttempt}>
                        <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text" onChange={handleInputChange} name="username"  placeholder="Username..." />
                        </div>
                        </div>
                        <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" onChange={handleInputChange} name="password"  placeholder="Password..." />
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        </div>
                        <div className="mt-4 has-text-centered">
                            { values.error && <p className="has-text-danger mb-2">Check credentials!</p>  }
                            <button className="button is-warning">Sign In</button>
                        </div>
                     </form>
                </div>
              </div>
            </div>
        </>
    )
}
