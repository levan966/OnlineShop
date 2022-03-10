import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          name="password"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
