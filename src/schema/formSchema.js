import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  unitPrice: yup
    .number("unit price should be a number")
    .required("unit price is required")
    .positive("age should be positive"),
    // .integer("age should be integer"),
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string("password should be a string")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12")
    .required("password is required"),
});