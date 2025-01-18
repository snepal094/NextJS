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
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LogIn = () => {
  const router = useRouter();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        // validation is required in both frontend and backend

        onSubmit={async (values) => {
          try {
            console.log(values);

            //API hit is a time consuming task: async await
            const response = await axios.post(
              'http://localhost:8080/user/login',
              values //req.body, equivalent to email=values.email, password=values.password
            );

            /* Equivalent to:
           ? const response= await axios({
           ? method: 'POST',
           ? url: 'http://localhost:8080/user/login',
           ? data: values
           ? })
            */

            console.log(response);
            //response=response sent by the API (see user.controller.js in backend)

            window.localStorage.setItem('token', response?.data?.accessToken);
            //accessToken stored at the local storage (browser is holding the token temporarily)
            //accessToken isn't required to be saved at the database
            //it should expire (for security)
            //refreshToken is needed to restore (renew) accessTokens since it won't be practical for the user to be logged out every time accessToken expires
            //for eg: if accessToken expires in 10 minutes, refreshToken expires in 7 days
            //storing it in the local storage saves bandwidth and makes microservice run smoothly
            //eg: pay and order services (APIs).

            window.localStorage.setItem(
              'firstName',
              response?.data?.userDetails?.firstName
            );

            window.localStorage.setItem(
              'userRole',
              response?.data?.userDetails?.role
            );

            router.push('/'); //navigate to the home page
          } catch (error) {
            console.log('Error aayo');
          }
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

              <div className="w-full flex flex-col justify-center items-center">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  fullWidth
                >
                  Log In
                </Button>

                <Link
                  href="/register"
                  className="text-md underline text-blue-600 mt-2"
                >
                  New here? Register
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

// () folder names are just for grouping and do not affect routing

export default LogIn;
