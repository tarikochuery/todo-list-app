import styled from "styled-components";


const Radio = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.secondary.bgColor};
  background: transparent;

  margin-right: 20px;

  cursor: pointer;

  :hover{
    background: ${props => `linear-gradient(${props.theme.colors.secondary.bgCardColor}, ${props.theme.colors.secondary.bgCardColor})`} padding-box,
    ${props => props.theme.colors.primary.checkBgColor} border-box;
    border-color: transparent;
  }
`

export default Radio