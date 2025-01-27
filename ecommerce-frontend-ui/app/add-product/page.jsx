import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { addProductValidationSchema } from '../validation-schema/product.validation.schema';

const AddProduct = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        brand: '',
        price: 0,
        quantity: 0,
        category: '',
        freeShipping: false,
        description: '',
      }}
      validationSchema={addProductValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h3">Add Product</Typography>

            <FormControl>
              <TextField label="Name" {...formik.getFieldProps('name')} />
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              ) : null}
            </FormControl>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
