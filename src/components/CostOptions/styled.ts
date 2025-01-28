import styled, { css } from 'styled-components'
import { COLORS } from '../../assets/styles/constants'

export const OptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid ${COLORS.purple};
	border-radius: 10px;
	width: 100%;
	height: 55px;
	overflow: hidden;
`

export const ButtonStyled = styled.div`
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	border: 1px solid ${COLORS.purple};
	cursor: pointer;
	transition: color 0.4s, background 0.4s;
	${p =>
		p.isActive &&
		css`
			background: ${COLORS.purple};
			color: ${COLORS.white};
		`}

	&:hover {
		background: ${COLORS.purple};
		color: ${COLORS.white};
	}
`
