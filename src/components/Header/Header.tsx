import React from 'react'
import { Container } from '../base/Container'
import Logo from '../Logo/Logo'
import { HeaderContainer, HeaderStyled } from './styled'

const Header = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContainer>
					<Logo />
					<button>Cart</button>
				</HeaderContainer>
			</Container>
		</HeaderStyled>
	)
}

export default Header
