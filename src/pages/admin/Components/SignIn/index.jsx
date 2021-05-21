import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Error } from '../../../../Services/FormHandler/validateInfo';
import {
  Container,
  FormWrapper,
  Icon,
  FormContent,
  Form,
  FormLabel,
  FormH1,
  FormInput,
  FormButton,
  Spinner,
} from './SignInElements';
import NotificationToast from '../../../../Components/Toast';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectLoadingSpinner } from '../../../../Redux/user/userSelector';
import { setLoadingSpinner } from '../../../../Redux/user/userAction';
import { setCurrentAdminAsync } from '../../../../Redux/admin/adminAction';
import withUseFormHook from '../../../../HOC/FormWrapper';
import { compose } from 'redux';

const logo = './images/logo.jpg';

class AdminAuth extends PureComponent {
  render() {
    const {
      handleSubmit,
      handleChange,
      values,
      resetInput,
      Controller,
      control,
      errors,
      setCurrentAdmin,
      loadingSpinner,
      setLoadingSpinner,
      history,
    } = this.props;
    const { email, password } = values;

    const onSubmit = async (data) => {
      setLoadingSpinner(true);
      resetInput();
      try {
        const postUser = await setCurrentAdmin(data, '/admin/signin');
        if (!postUser.success) {
          setLoadingSpinner(false);
          return NotificationToast.error(`${postUser.message}`);
        } else {
          NotificationToast.success(`${postUser.message}`);
          setLoadingSpinner(false);
          return history.push('/admin/dashboard');
        }
      } catch (error) {
        console.log(error);
        setLoadingSpinner(false);
      }
    };

    return (
      <>
        <Container>
          <FormWrapper>
            <Icon to="/">
              <img src={logo} width="100px" alt="logo" />
            </Icon>
            <FormContent>
              <Form action="#" onSubmit={handleSubmit(onSubmit)}>
                <FormH1>Admin SignIn</FormH1>
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
  setCurrentAdmin: (data, route) => dispatch(setCurrentAdminAsync(data, route)),
  setLoadingSpinner: (loading) => dispatch(setLoadingSpinner(loading)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withUseFormHook
)(AdminAuth);
