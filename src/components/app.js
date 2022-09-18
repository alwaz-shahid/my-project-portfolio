import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
const pageStyle = { minHeight: '100vh', minWidth: '100%', maxWidth: '1440px' };
const App = () => (
  <div id='app' style={pageStyle}>
    <Header />
    <Router>
      <Home path='/' />
      <Profile path='/profile/' user='me' />
      <Profile path='/profile/:user' />
    </Router>
  </div>
);

export default App;
