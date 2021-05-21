import React, { Component } from 'react';
import { ToggleButton } from './themeToggleElement';
const sun = './images/sun.png';
const moon = './images/moon.png';

class ThemeToggle extends Component {
  render() {
    const { theme, toggleTheme } = this.props;
    const isLight = theme === 'light';
    return (
      <>
        <ToggleButton lightTheme={isLight} onClick={toggleTheme}>
            <img src={sun} alt="sun" width="15px" height="15px" />
            <img src={moon} alt="moon" width="15px" height="15px" />
        </ToggleButton>
      </>
    );
  }
}

export default ThemeToggle;
