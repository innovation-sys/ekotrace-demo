import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to Ekotrace Demo!</h1>
      {user ? (
        <div>
          <p>Hello, {user.name}!</p>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
      ) : (
        <div>
          <p>Please log in to access the dashboard.</p>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;