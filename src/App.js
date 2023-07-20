import React, { useEffect, useState } from 'react';
import Login from './components/login';
import CreateTripForm from './components/CreateTripForm';
import EnquiriesList from './components/EnquiriesList';
import axios from 'axios';
import Welcome from './components/welcome';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showCreateTripForm, setShowCreateTripForm] = useState(false); // State to track whether to show CreateTripForm

  const history = useHistory();

  const handleLogout = () => {
    setIsAdmin(false);
    setLoggedInUser(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (loggedInUser?.data?.role === 1) {
      setIsAdmin(true);
     }
  }, [loggedInUser, history]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-trip-form" component={CreateTripForm} />
          <Route exact path="/">
            {isLoggedIn ? (
              <>
                <button onClick={() => setShowCreateTripForm(true)}>Goto Bookings</button>
                {showCreateTripForm && <Redirect to="/create-trip-form" />}
              </>
            ) : (
              <>
               {!loggedInUser && <div className="row justify-content-center mt-10">
                  <div className="col-md-4">
                    <Welcome />
                  </div>
                  <div className="col-md-4 m-0">
                    <Login
                      setIsAdmin={setIsAdmin}
                      isAdmin={isAdmin}
                      loggedInUser={loggedInUser}
                      setLoggedInUser={setLoggedInUser}
                    />
                  </div>
                </div>}
              </>
            )}
          </Route>
        </Switch>
      </Router>

      {isAdmin && loggedInUser && <> <button onClick={handleLogout}>Logout</button>
                 <EnquiriesList /></>}
    </div>
  );
};

export default App;
