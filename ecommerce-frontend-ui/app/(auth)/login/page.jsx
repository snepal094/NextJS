'use client';
//since client interacts with the form
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { loginUserValidationSchema } from '../../validation-schema/login.user.validation.schema';

const LogIn = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        // validation is required in both frontend and backend
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between min-h-[400px] w-[400px] shadow-2xl shadow-gray-500 px-8 py-4 items-center"
            >
              {/* handleSubmit is a pre-existing function of formik */}

              <p className="text-3xl font-bold">Sign In</p>

              <FormControl fullWidth>
                {/* FormControl is a div, easier to style */}
                <TextField label="Email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
                {/* form is not submitted upon encountering error since an unnecessary API request will be sent making the server pointlessly busy */}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
              >
                Log In
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

// () folder names are just for grouping and do not affect routing

export default LogIn;
