import React, { Component } from 'react';
import './styles.css';
import NotificationToast from '../../../Components/Toast';
import { Error } from '../../../Services/FormHandler/validateInfo';
import { connect } from 'react-redux';
import { setCurrentUserAsync, setLoadingSpinner } from '../../../Redux/user/userAction';
import { selectLoadingSpinner } from '../../../Redux/user/userSelector';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrapper,
  Icon,
  Image,
  Spinner,
  Text,
  Text2,
  Goto,
} from './SignInElements';
import { compose } from 'redux';
import withUseFormHook from '../../../HOC/FormWrapper';
import { withRouter } from 'react-router-dom';
const logo = './images/logo.jpg';

class SignInPage extends Component {
  componentDidMount() {
    document.title = 'Sign In';
  }

  render() {
    const {
      setCurrentUser,
      setLoadingSpinner,
      loadingSpinner,
      handleSubmit,
      handleChange,
      values,
      control,
      Controller,
      resetInput,
      errors,
      history,
    } = this.props;
    const { email, password } = values;

    const onSubmit = async (data) => {
      setLoadingSpinner(true);
      resetInput();

      try {
        const postUser = await setCurrentUser(data, '/auth/signin');
        if (!postUser.success) {
          setLoadingSpinner(false);
          return NotificationToast.error(`${postUser.message}`);
        } else {
          NotificationToast.success(`${postUser.message}`);
          setLoadingSpinner(false);
          return history.push('/dashboard');
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <Container>
          <Image src="./svg/delivery_address.svg" />
          <FormWrapper>
            <Icon to="/">
              <img src={logo} width="100px" alt="logo" />
            </Icon>
            <FormContent>
              <Form action="#" onSubmit={handleSubmit(onSubmit)}>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <Controller
                  name="email"
                  as={
                    <FormInput
                      type="email"
                      value={email}
                      placeholder="Enter Your Email Address"
                      onChange={handleChange}
                    />
                  }
                  rules={{
                    required: 'Email field is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'email')}

                <FormLabel htmlFor="for">Password</FormLabel>
                <Controller
                  name="password"
                  as={
                    <FormInput
                      type="password"
                      value={password}
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                    />
                  }
                  rules={{
                    required: 'Password field is required',
                    minLength: {
                      value: 7,
                      message: 'Password must be of atleast 7 characters',
                    },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'password')}

                <FormButton type="submit">{loadingSpinner ? <Spinner /> : 'SignIn'}</FormButton>
                <Text>Forgot Password?</Text>
                <Text2>
                  Don't have an account? <Goto to="/signup">SignUp</Goto>
                </Text2>
              </Form>
            </FormContent>
          </FormWrapper>
        </Container>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loadingSpinner: selectLoadingSpinner,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (data, route) => dispatch(setCurrentUserAsync(data, route)),
  setLoadingSpinner: (loading) => dispatch(setLoadingSpinner(loading)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withUseFormHook
)(SignInPage);
