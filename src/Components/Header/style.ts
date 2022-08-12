import styled from "styled-components";


const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  color: var(--very-light-gray);
  letter-spacing: 0.8rem;
  font-weight: 700;
`

export default HeaderStyle
export { Logo }