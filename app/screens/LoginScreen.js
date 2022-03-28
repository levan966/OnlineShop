import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = (props) => {
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    console.log(user);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
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
