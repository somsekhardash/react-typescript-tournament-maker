import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const validationSchema: any = yup.object({
  fullName: yup.string().required(),
  mobileNumber: yup.number().required(),
});

export const Signin = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box color="text.primary">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          fullWidth
          id="mobileNumber"
          name="mobileNumber"
          label="mobileNumber"
          type="tel"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
          }
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
