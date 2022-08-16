import styled from "styled-components";

interface Props {
  completed?: boolean
}

const Radio = styled.div<Props>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.secondary.bgColor};
  background-image: ${props => props.completed ? props.theme.colors.primary.checkBgColor : 'transparent'};

  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  :hover{
    background: ${props => !props.completed ? `linear-gradient(${props.theme.colors.secondary.bgCardColor}, ${props.theme.colors.secondary.bgCardColor})` : props.theme.colors.primary.checkBgColor} padding-box,
    ${props => !props.completed ? props.theme.colors.primary.checkBgColor : 'transparent'} border-box;
    border-color: transparent;
  }
`

export default Radio