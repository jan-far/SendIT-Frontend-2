import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import './style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import LocationSearchInput from '../../../Components/GooglePlace';
import { Error } from '../../../Services/FormHandler/validateInfo';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrapper,
  Goto,
  Icon,
  Image,
  Spinner,
  Text,
  Text2,
} from './SignUpElements';
import NotificationToast from '../../../Components/Toast';
import { connect } from 'react-redux';
import { setCurrentUserAsync, setLoadingSpinner } from '../../../Redux/user/userAction';
import { selectLoadingSpinner } from '../../../Redux/user/userSelector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withUseFormHook from '../../../HOC/FormWrapper';

const logo = './images/logo.jpg';

class SignUpPage extends Component {
  componentDidMount() {
    document.title = 'Sign Up';
  }

  render() {
    const {
      setCurrentUser,
      setLoadingSpinner,
      loadingSpinner,
      watch,
      handleSubmit,
      handleChange,
      values,
      phone,
      setPhone,
      Controller,
      control,
      reset,
      resetInput,
      errors,
      history,
    } = this.props;
    const { firstname, lastname, email, password, location } = values;

    const onSubmit = async (data) => {
      setLoadingSpinner(true);
      reset();
      resetInput();
      try {
        const postUser = await setCurrentUser(data, '/auth/signup');
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

    const validatePhone = (phone) => {
      const compare = phone
        ? isValidPhoneNumber(phone)
          ? undefined
          : 'Invalid phone number'
        : 'Phone number required';
      return phone && compare;
    };

    const checkPassword = (pass) => {
      const passme = watch('password');
      const passKey = pass
        ? passme !== pass
          ? 'Passwords are not the same'
          : undefined
        : 'Password Confirmation is required';
      return pass && passKey;
    };

    return (
      <>
        <Container>
          <Image src="./svg/deliveries.svg" />
          <FormWrapper>
            <Icon to="/">
              <img src={logo} width="100px" alt="logo" />
            </Icon>
            <FormContent>
              <Form action="#" onSubmit={handleSubmit(onSubmit)}>
                <FormH1>SignUp An Account!</FormH1>
                <FormLabel htmlFor="for">First Name</FormLabel>
                <Controller
                  name="firstname"
                  as={
                    <FormInput
                      type="text"
                      value={firstname}
                      placeholder="Enter Your First Name"
                      onChange={handleChange}
                    />
                  }
                  rules={{
                    required: 'First name Cannot be empty!',
                    minLength: {
                      value: 2,
                      message: 'first name should be 2 or more characters long',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Name too long, max of 20 characters',
                    },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'firstname')}

                <FormLabel htmlFor="for">Last Name</FormLabel>
                <Controller
                  name="lastname"
                  as={
                    <FormInput
                      type="text"
                      value={lastname}
                      placeholder="Enter Your Last Name"
                      onChange={handleChange}
                    />
                  }
                  rules={{
                    required: 'Fast name Cannot be empty!',
                    minLength: {
                      value: 2,
                      message: 'last name should be 2 or more characters long',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Name too long, max of 20 characters',
                    },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'lastname')}

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
                      message: 'invalid email address',
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
                      value={password}
                      type="password"
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

                <FormLabel htmlFor="for">Repeat Password</FormLabel>
                <Controller
                  name="confirm password"
                  as={
                    <FormInput
                      type="password"
                      value={values['confirm password']}
                      placeholder="Re-enter Your Password"
                      onChange={handleChange}
                    />
                  }
                  rules={{
                    required: 'Password Confirmation required',
                    validate: { checkPassword },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'confirm password')}

                <FormLabel htmlFor="for">Phone</FormLabel>
                <Controller
                  name="phone"
                  as={
                    <PhoneInput
                      value={phone}
                      onChange={setPhone}
                      type="tel"
                      className="phone"
                      placeholder="Enter Your Phone Number"
                      defaultCountry="NG"
                      withCountryCallingCode
                    />
                  }
                  rules={{
                    required: 'Enter a valid phone number',
                    validate: { validatePhone },
                  }}
                  defaultValue=""
                  control={control}
                />
                {Error(errors, 'phone')}

                <FormLabel htmlFor="for">Location</FormLabel>
                <Controller
                  name="location"
                  as={<LocationSearchInput value={location} onChange={handleChange} />}
                  rules={{ required: 'Location field cannot be empty' }}
                  control={control}
                  defaultValue=""
                />
                {Error(errors, 'location')}

                <FormButton type="submit">{loadingSpinner ? <Spinner /> : 'SignUp'}</FormButton>
                <Text>Forgot Password?</Text>
                <Text2>
                  Already have an account? <Goto to="/signin">SignIn</Goto>
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
  setCurrentUser: (user) => dispatch(setCurrentUserAsync(user)),
  setLoadingSpinner: (loading) => dispatch(setLoadingSpinner(loading)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withUseFormHook
)(SignUpPage);
