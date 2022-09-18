import { h } from 'preact';
import Router from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const pageStyle = {
  minHeight: '100vh',
  minWidth: '100%',
  maxWidth: '1440px',
  overflowX: 'hidden',
};

const App = () => (
  <div id='app' style={pageStyle}>
    {/* <Header /> */}
    <Router>
      <Home path='/' />
    </Router>
  </div>
);

export default App;
