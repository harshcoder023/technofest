import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const stepOneValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  rollNo: Yup.string()
    .matches(
      /^[A-Za-z0-9]+\/[A-Za-z0-9]+\/\d+$/,
      "Please enter the correct Roll No."
    )
    .required("Roll No. is required"),
  phoneNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  fullName: Yup.string()
    .matches(
      /^[A-Za-z\s]*$/,
      "Name cannot contain numbers or special characters."
    )
    .required("Name is required"),
  college: Yup.string().required("College Name is required"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values, false);
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={stepOneValidationSchema}
    >
      <Form>
        <h2 className="text-lg font-medium mb-3">Personal Details</h2>
        <p className="mb-1 text-sm text-gray-600">Full Name</p>
        <Field
          className="border w-full  py-1 px-1.5 focus:border-gray-400 outline-none"
          name="fullName"
        />
        <ErrorMessage
          name="fullName"
          component="div"
          className="error mt-1.5 text-xs text-red-500"
        />
        <p className="mb-1 text-sm mt-3 text-gray-600">Roll No.</p>
        <Field
          className="border w-full  py-1 px-1.5 focus:border-gray-400 outline-none placeholder-gray-500 placeholder-opacity-60"
          name="rollNo"
          placeholder="21/CS/181"
        />

        <ErrorMessage
          name="rollNo"
          component="div"
          className="error mt-1.5 text-xs text-red-500"
        />
        <p className="mb-1 text-sm mt-3 text-gray-600">College</p>
        <Field
          className="border w-full  py-1 px-1.5 focus:border-gray-400 outline-none "
          name="college"
        />
        <ErrorMessage
          name="college"
          component="div"
          className="error mt-1.5 text-xs text-red-500"
        />
        <div className="flex gap-2 pt-4">
          <Field name="course" as="select" className="w-[50%] border py-2 px-1">
            <option value="btech_cse">B.Tech CSE</option>
            <option value="btech_ece">B.Tech ECE</option>
            <option value="btech_ee">B.Tech EE</option>
            <option value="btech_me">B.Tech ME</option>
            <option value="bca">BCA</option>
            <option value="bba">BBA</option>
            <option value="mba">MBA</option>
            <option value="mtech_cse">M.Tech CSE</option>
            <option value="mtech_ece">M.Tech ECE</option>
          </Field>
          <Field name="year" as="select" className="w-[50%] border py-2 px-1">
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </Field>
        </div>
        <p className="mb-1 text-sm mt-3 text-gray-600">Phone No.</p>
        <Field
          className="border w-full  py-1 px-1.5 focus:border-gray-400 outline-none"
          name="phoneNo"
          type="number"
        />
        <ErrorMessage
          name="phoneNo"
          component="div"
          className="error mt-1.5 text-xs text-red-500"
        />
        <p className="mb-1 text-sm mt-3 text-gray-600">Email Address</p>
        <Field
          className="border w-full  py-1 px-1.5 focus:border-gray-400 outline-none"
          name="email"
          type="email"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="error mt-1.5 text-xs text-red-500"
        />
        <button
          className="bg-[#FA7F5C] py-2 text-white rounded-md inline-block w-full mt-4"
          type="submit"
        >
          Next
        </button>
      </Form>
    </Formik>
  );
};

export default StepOne;
