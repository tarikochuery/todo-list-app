import React, { useReducer } from 'react';
import GlobalStyle from '../../styles/globalStyles';
import Header from '../Header/Header';
import InputTask from '../InputTask/InputTask';
import TaskList from '../TaskList/TaskList';
import AppStyle, { AppContainer } from './style';
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark ';
import usePersistedState from '../../hooks/usePersistedState';
import TaskListContext from '../../contexts/TextListContext/TaskListContext';
import TaskListReducer from '../../contexts/TextListContext/TaskListReducer';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light)
  const [taskList, dispatchTaskList] = useReducer(TaskListReducer, [])

  const changeTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyle>
        <TaskListContext.Provider value={taskList}>
          <AppContainer>
            <Header changeTheme={changeTheme} />
            <InputTask dispatchTaskList={dispatchTaskList}/>
            <TaskList />
          </AppContainer>
        </TaskListContext.Provider>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
