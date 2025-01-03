'use client';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
const Counter = () => {
  const [count, setCount] = useState(100);
  const [wishUser, setWishUser] = useState(false);

  useEffect(() => {
    if (count === 110) {
      setWishUser(true);
    }
  }, [count]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setWishUser(false);
  };

  return (
    <div>
      <Snackbar open={wishUser} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Merry Christmas
        </Alert>
      </Snackbar>
      <Typography variant="h3">{count}</Typography>

      <Button
        variant="contained"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        add
      </Button>
    </div>
  );
};

export default Counter;
