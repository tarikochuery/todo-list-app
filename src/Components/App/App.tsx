import React from 'react';
import GlobalStyle from '../../styles/globalStyles';
import Header from '../Header/Header';
import InputTask from '../InputTask/InputTask';
import TaskList from '../TaskList/TaskList';
import AppStyle, { AppContainer } from './style';
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark ';
import usePersistedState from '../../hooks/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light)

  const changeTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      
      <GlobalStyle />
      <AppStyle>
        <AppContainer>
          <Header changeTheme={changeTheme} />
          <InputTask />
          <TaskList />
        </AppContainer>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
