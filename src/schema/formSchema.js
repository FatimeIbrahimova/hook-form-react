import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  unitPrice: yup
    .number("unitPrice should be a number")
    .required("unitPrice is required")
    .positive("unitPrice should be positive"),
  unitsInStock: yup
    .number("unitsInStock should be a number")
    .required("unitsInStock is required"),
  quantityPerUnit: yup
    .number("quantityPerUnit should be a number")
    .required("quantityPerUnit is required"),
});