import styled from "styled-components";


const TaskLabel = styled.label`
  display: flex;
  padding: 20px;
  margin-bottom: 20px;

  background-color: ${props => props.theme.colors.secondary.bgCardColor};
  border-radius: 5px;
`

const TaskInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 90%;
  color: ${props => props.theme.colors.secondary.letterColor};

  ::placeholder{
    color: ${props => props.theme.colors.secondary.placeholderColor};
  }

  caret-color: ${props => props.theme.colors.primary.checkBgColor};
`


export default TaskLabel

export { TaskInput }