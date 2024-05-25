
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard'; 
import TransactionsPage from './TransactionsPage';


function App() {
  return (
    <Router>
      <div>
        {/* This is responsible for the navbar-like approach. Ensures that the routes are displayed regardless of what page you are in */}
        <Navigation /> {/* Navigation component placed here */}
        <hr />
        
        <Routes> {/* Routes to pages */}
          <Route exact path='/' element={<HomePage />} /> {/* Home Page */}
          <Route exact path='/about' element={<AboutPage />} /> {/* About Page */}
          <Route exact path='/login' element={<LoginPage />} /> {/* LoginPage */}
          <Route exact path='/dashboard' element={<Dashboard />} /> {/* Dashboard Page */}
          <Route exact path='/transactions' element={<TransactionsPage />} /> {/* Transactions Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
