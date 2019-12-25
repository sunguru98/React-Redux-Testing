import React from 'react'
import { HeaderContainer, LogoContainer } from '../styles/HeaderStyles'
import { ReactComponent as HeaderLogo } from '../logo.svg'

const Header: React.FC = () => {
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
