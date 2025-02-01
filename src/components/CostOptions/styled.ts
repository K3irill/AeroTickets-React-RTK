import styled, { css } from 'styled-components'
import { BREAKPOINTS, COLORS } from '../../assets/styles/constants'

export const OptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid ${COLORS.purple};
	border-radius: 10px;
	width: 100%;
	height: 55px;
	overflow: hidden;
`
interface ButtonStyledProps {
	isActive: boolean
}
export const ButtonStyled = styled.div<ButtonStyledProps>`
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	border: 1px solid ${COLORS.purple};
	background: ${COLORS.grey};
	cursor: pointer;
	color: ${COLORS.purple};
	font-weight: 700;
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

	@media (max-width: ${BREAKPOINTS.mobile}) {
		font-size: 12px;
		font-weight: 500;
		line-height: 14px;
		text-align: center;
	}
`
