import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/NavBar';
import LogoutPage from './pages/LogoutPage';

function App() {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState({});
  const [userRecipes, setUserRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/api/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    }).then(response => {
      console.log(`response: ${response}`)
      if (response.status === 200) return response.json();
      throw new Error("failed to authenticate user");
    }).then(responseJSON => {
      console.log(`response.user: ${JSON.stringify(responseJSON.user)}`)
      setAuthenticated(true);
      setUserId(responseJSON.user._id);
      setUsername(responseJSON.user.name);
      setUserRecipes(responseJSON.user.recipeIDs);
    }).catch(err => {
      setAuthenticated(false);
      setError("Failed to authenticate user");
      console.log(err);
    });
  }, []);
  return (
    <Router>
      <NavBar user={{ name: username, id: userId, recipes: userRecipes }} authenticated={authenticated} />
      <Switch >
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" render={(props) => (
          <ProfilePage {...props} user={{ name: username, id: userId, recipes: userRecipes }} authenticated={authenticated} />
        )} />
        <Route path="/logout" render={(props) => (
          <LogoutPage setAuthenticated={setAuthenticated} />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
