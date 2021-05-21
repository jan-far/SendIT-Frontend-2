import React, { Component } from 'react';
import { BoltLoader } from 'react-awesome-loaders';
import { withTheme } from 'styled-components';
import { Preload } from './LoadingElements';

class LoadingSpinner extends Component {
  render() {
    const { theme } = this.props;
    return (
      <>
        <Preload>
          <BoltLoader
            desktopSize="60px"
            boltColor={theme.mode === 'light' ? '#0e0e2b' : '#01bf61'}
            backgroundBlurColor={theme.mode === 'light' ? theme.gradient : theme.gradient}
          />
        </Preload>
      </>
    );
  }
}

export default withTheme(LoadingSpinner);
