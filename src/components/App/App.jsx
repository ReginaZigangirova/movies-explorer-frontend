import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound';
import api from "../../utils/MainApi"
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]); 
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('')

  React.useEffect(() => { 
    checkToken();
    if (loggedIn) {
      history.push('/movies');
      Promise.all([moviesApi.getMovies()])  
    .then(([movies]) => { 
        setMovies(movies); 
    }).catch((err) => { 
      console.error(err); 
    }); 
    }
  }, [loggedIn]); 

  const onLogin = ( password, email) => {
    api
      .authorization( password, email)
      .then((res) => {
        if(res) {
          setLoggedIn(true);
          history.push('/movies');
          localStorage.setItem('jwt', res.token);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
  const onRegister = (name, password, email) => {
    api
      .register(name, password, email)
      .then(() => {        
          history.push('/movies');
          setUserEmail(email);
          setUserName(name)
      })
      .catch((err) => {
        console.log(err)      
      })
  }
  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    if(token) {
      setLoggedIn(true);
    api
      .validityToken(token)
      .then(() => {
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  React.useEffect(() => {
    if (loggedIn) {
      api.getUser()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
         console.log(err)
        });
    }
  }, [loggedIn]);

  const logoutProfile = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Switch>
        <Route exact path="/">
        <Header />
        <Main />
        <Footer />
        </Route>
        <Route path='/signin'> 
        <Login onLogin={onLogin}/>
      </Route> 
        <Route path='/signup'>
          <Register onRegister={onRegister} />
      </Route> 
      <Route path='/profile'>
      <Header />
        <ProtectedRoute path='/profile' component= {Profile} userEmail={userEmail} userName={userName} logoutProfile={logoutProfile} loggedIn={loggedIn}/>
      </Route>
       <Route path='/movies'>
       <Header />
        <ProtectedRoute component={Movies} loggedIn={loggedIn} movies={movies}/>
        <Footer />
      </Route>
      <Route path='/saved-movies'>
        <Header />
        <ProtectedRoute component={SavedMovies} loggedIn={loggedIn} />
        <Footer />
      </Route> 
      <Route path='*'>
        <PageNotFound />
      </Route>
        </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
