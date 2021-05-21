import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Pages from './pages';
import { GlobalStyles } from './globalScope';
import './App.css';
import ThemeToggle from './Components/ThemeToggler';

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
      window.localStorage.setItem('theme', 'dark');
    } else {
      this.setState({ theme: 'light' });
      window.localStorage.setItem('theme', 'light');
    }
  }

  componentDidMount() {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      this.setState({ theme: localTheme });
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }
  render() {
    const themeMode = this.state.theme === 'light' ? lightTheme : darkTheme;

    return (
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <ThemeToggle theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Pages />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
