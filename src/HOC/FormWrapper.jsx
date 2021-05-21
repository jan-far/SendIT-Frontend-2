import React from 'react';
import FormHandler from '../Services/FormHandler';

const withUseFormHook = (Component) => (props) => {
  const form = FormHandler();
  return <Component {...props} {...form} />;
};

export default withUseFormHook;
