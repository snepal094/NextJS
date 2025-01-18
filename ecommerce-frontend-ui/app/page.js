'use client';
import React, { useEffect, useState } from 'react';
import BuyerList from './components/BuyerList';
import SellerList from './components/SellerList';

const Home = () => {
  const [userRole, setUserRole] = useState(null);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    setUserRole(window.localStorage.getItem('userRole'));
    setFirstName(window.localStorage.getItem('firstName'));
  }, []);

  return (
    <div>
      <p className="text-5xl bold">Welcome, {firstName}!</p>

      {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
