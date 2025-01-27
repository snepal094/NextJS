import { productCategories } from '@/constants/general.constant';
import * as Yup from 'yup';

export const addProductValidationSchema = Yup.object({
  name: Yup.string().required('Name is required.').trim().max(55),
  brand: Yup.string().required('Brand name is required.').trim().max(55),
  price: Yup.number().required().moreThan(0),
  quantity: Yup.number().required().min(1, 'Minimum quantity must be 1.'),
  category: Yup.string().trim().required().oneOf(productCategories),
  freeShipping: Yup.boolean().default(false),
  description: Yup.string()
    .required()
    .trim()
    .min(100, 'Product description must be at least 100 characters.')
    .max(1000, 'Product description must be at most 1000 characters.'),
});
