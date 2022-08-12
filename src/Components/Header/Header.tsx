import React from 'react'
import HeaderStyle, { Logo } from './style'

export default function Header() {
  return (
    <HeaderStyle>
      <Logo>
        TODO
      </Logo>
      <div className='theme-button-container'>
        <img src="/images/icon-moon.svg" alt="" />
      </div>
    </HeaderStyle>
  )
}
