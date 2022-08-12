import React from 'react';
import Header from '../Header/Header';
import InputTask from '../InputTask/InputTask';
import TaskList from '../TaskList/TaskList';
import AppStyle, { AppContainer } from './style';



function App() {
  return (
    <AppStyle>
      <AppContainer>
        <Header />
        <InputTask />
        <TaskList />
      </AppContainer>
    </AppStyle>
  );
}

export default App;
