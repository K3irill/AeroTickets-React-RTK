import React from 'react'
import { ButtonStyled, OptionsContainer } from './styled'

const CostOptions = () => {
	return (
		<OptionsContainer>
			<ButtonStyled isActive>Самый дешевый</ButtonStyled>
			<ButtonStyled>Самый быстрый</ButtonStyled>
			<ButtonStyled>Самый оптимальный</ButtonStyled>
		</OptionsContainer>
	)
}

export default CostOptions
