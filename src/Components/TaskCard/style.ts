import styled from "styled-components";


const TaskCardStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary.bgCardColor};
  color: ${props => props.theme.colors.secondary.letterColor};

  padding: 20px 20px;

  border-bottom: 1px solid ${props => props.theme.colors.secondary.placeholderColor};


  &:first-child{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`

const TaskDeleteButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export default TaskCardStyle
export { TaskDeleteButton }