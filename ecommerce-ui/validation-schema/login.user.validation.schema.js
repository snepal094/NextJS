import * as Yup from 'yup';

export const loginUserValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Required')
    .max(55, 'Email must be at max 55 characters')
    .trim()
    .lowercase(),

  password: Yup.string()
    .required('Password is required')
    .max(20, 'Password must be at max 20 characters'),

  // name: Yup.string()
  //   .required("Name is required")
  //   .max(20, "Password must be at max 25 characters"),

  // phoneNumber: Yup.string()
  //   .required("Phone number is required")
  //   .max(10, "Phone number must be exactly 10 digits"),

  // address: Yup.string()
  //   .required("Address is required")
  //   .max(20, "Password must be at max 15 characters"),

  // gender: Yup.string()
  //   .required("Gender is required")
  //   .oneOf(
  //     ["Male", "Female", "Other", "Prefer not to say"],
  //     "Invalid gender selection"
  //   ),

  // dateOfBirth: Yup.date()
  //   .required("Date of Birth is required")
  //   .max(new Date(), "Date of Birth cannot be in the future")
  //   .test("age-check", "You must be at least 18 years old", (value) => {
  //     const today = new Date();
  //     const minAgeDate = new Date(
  //       today.getFullYear() - 18,
  //       today.getMonth(),
  //       today.getDate()
  //     );
  //     return value <= minAgeDate;
  //   }),
});
