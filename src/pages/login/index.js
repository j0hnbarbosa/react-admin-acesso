import React from 'react';
import {
  useLogin, useNotify, useAuthenticated,
} from 'react-admin';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Container, ContainerField } from './styles';
import { validateLogin } from '../../validadeForm';

const Login = () => {
  const login = useLogin();
  const notify = useNotify();

  const onSignIn = (values) => {
    try {
      login({ username: values.email, passworda: values.password })
        .catch(() => notify('Invalid email or password'));
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.log(ex);
    }
  };

  useAuthenticated();

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validateLogin}
        onSubmit={onSignIn}
      >
        {({ isSubmitting }) => (
          <Form>
            <ContainerField>
              <Field name="email" />
              <ErrorMessage name="email" component="Container" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </ContainerField>
          </Form>
        )}
        {/* <Notification /> */}
      </Formik>
    </Container>
  );
};

export default Login;
