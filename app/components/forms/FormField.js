import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;

const styles = StyleSheet.create({});
