'use client';

import { loginUserValidationSchema } from '@/validation-schema/login.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              'http://localhost:8080/user/login',
              values

              // const response= await axios({
              //   method: 'POST',
              //   url: 'http://localhost:8080/user/login',
              //   data: values
            );

            localStorage.setItem('token', response?.data?.accessToken);
            localStorage.setItem(
              'firstName',
              response?.data?.userDetails?.firstName
            );
            localStorage.setItem('userRole', response?.data?.userDetails?.role);

            router.push('/');
          } catch (err) {
            console.log('error aayo', err);
          }
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between items-center w-[400px] shadow-2xl shadow-slate-700 p-8 min-h-[400px]"
            >
              <p className="text-3xl">Sign in</p>
              {/* emai. */}
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  {...formik.getFieldProps('email')}
                ></TextField>
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              {/* / Password */}

              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                ></TextField>
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Login
              </Button>

              <div>
                <Link
                  href="/register"
                  className="text-md underline text-blue-600"
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

export default Login;
