import styled from "styled-components";


const FooterContainer = styled.div`
  padding:20px;
  background-color: ${props => props.theme.colors.secondary.bgCardColor};
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary.buttonColor};
`

const FooterButtonContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`

const FooterButton = styled.button`
  color: ${props => props.theme.colors.secondary.buttonColor};
  background-color: transparent;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.colors.secondary.buttonHoverColor};
  }
`

export { FooterContainer,  FooterButtonContainer, FooterButton }