import React, {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import HeaderStyle, { Logo } from './style'

interface HeaderProps{
  changeTheme: () => void
}

const Header:React.FC<HeaderProps> = ({ changeTheme }) => {
  const { icon } = useContext(ThemeContext)

  return (
    <HeaderStyle>
      <Logo>
        TODO
      </Logo>
      <div 
        className='theme-button-container' 
        style={{cursor: 'pointer'}}
        onClick={changeTheme}
      >
        <img src={icon} alt="" />
      </div>
    </HeaderStyle>
  )
}

export default Header