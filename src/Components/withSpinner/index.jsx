import React, { Component } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinnerElements';

// const withSpinner = (WrappedComponent) => ({ stay, isLoading, ...otherProps }) => {
//   return isLoading ? (
//     <SpinnerOverlay stay={stay ? 'true' : null}>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrappedComponent {...otherProps} />
//   );
// };

const withSpinner = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { stay, isLoading, ...otherProps } = this.props;
      return isLoading ? (
        <SpinnerOverlay stay={stay ? 'true' : null}>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    }
  };
};
export default withSpinner;
