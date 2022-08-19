import styled, { css } from "styled-components";

interface Props {
  isDragging: boolean
}

const TaskCardStyle = styled.div<Props>`
  width: 100%;
  min-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary.bgCardColor};
  color: ${props => props.theme.colors.secondary.letterColor};
  cursor: grab;

  padding: 20px 20px;

  border-bottom: 1px solid ${props => props.theme.colors.secondary.placeholderColor};


  &:first-child{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed ${props => props.theme.colors.secondary.bgColor};
    padding: 18px 20px;
    background: transparent;
    cursor: grabbing;

    p, img, div {
      opacity: 0   
    }
  `}
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