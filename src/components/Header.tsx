import React from 'react'
import { HeaderContainer, LogoContainer } from '../styles/HeaderStyles'
import { ReactComponent as HeaderLogo } from '../logo.svg'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <LogoContainer data-test='logoContainer'>
        <HeaderLogo
          data-test='headerLogo'
          style={{ width: '6rem', height: '6rem' }}
        />
      </LogoContainer>
    </HeaderContainer>
  )
}

export default Header
