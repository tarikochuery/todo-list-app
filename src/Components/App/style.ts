import styled from "styled-components";


const AppStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/images/bg-desktop-light.jpg');
  background-repeat: no-repeat;
  background-color: var(--very-light-gray);
  background-size: contain;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 30px;
`

const AppContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export default AppStyle

export { AppContainer }