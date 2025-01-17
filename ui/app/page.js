'use client';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
//whenever hooks, buttons, and client side functions are used
import React from 'react';

//routing is folder based

const Home = () => {
  const router = useRouter();
  //when page is changed upon clicking a button
  return (
    <Box>
      <Typography variant="h3">Home</Typography>
      <Button
        onClick={() => {
          router.push('/contact');
          //server side: redirect('/contact') when there are no buttons or anything else
        }}
      >
        Go to Contact
      </Button>
      <Button
        onClick={() => {
          router.push('/about');
        }}
      >
        About
      </Button>
    </Box>
  );
};

export default Home;
