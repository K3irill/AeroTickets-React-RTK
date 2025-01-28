import styled from 'styled-components'
import { COLORS } from '../../assets/styles/constants'

export const HeaderStyled = styled.header`
	height: fit-content;
	position: absolute;
	width: 100%;
	background: ${COLORS.white};
`

export const HeaderContainer = styled.header`
	padding: 20px 0px;
	display: flex;
	justify-content: space-between;
`
