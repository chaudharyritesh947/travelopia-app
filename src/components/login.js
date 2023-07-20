import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import '../App.css';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const history = useHistory();

  const navigateToCreateTrip = () => {
    history.push('/create-trip-form');
  };

  const {loggedInUser,setLoggedInUser} = props;
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      axios.post('http://localhost:4000/api/login', {
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        // Check the response from the backend and set the login state accordingly
        if(response?.data){
          setLoggedInUser(response.data);
        }
        else{
          setLoggedInUser(null);
        }
       
      })
      .catch((error) => {
        console.error('Login failed:', error);
        setLoggedInUser(false);
      });
  };

  return ( 
    
        <div className="m-0  card p-4 opacity-shadow" style={{"height": "45rem!important"}}>
          <h2 className="card-title text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="username">Email:</label>
              <input
                type="text"
                className="form-control slight-shadow"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control slight-shadow"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block slight-shadow">
              Login
            </button>
          </form>
          
          <button  onClick={navigateToCreateTrip} className="mt-5 btn btn-success btn-block slight-shadow">
             Goto Bookings
            </button>
          

            <img class="imag-login" src="https://www.zohowebstatic.com/sites/zweb/images/desk/images/customer-support.software.png"/>
        </div>
      
);
};

export default Login;
