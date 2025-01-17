import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <Box>
      <Typography variant="h3">About</Typography>
      <Link href="/">Go to Home</Link>
    </Box>
  );
};

export default About;
