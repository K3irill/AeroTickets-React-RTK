import styled from 'styled-components'
import { COLORS } from '../../assets/styles/constants'

export const ContainerStyled = styled.div`
	width: 100%;
`

export const TicketsList = styled.div`
	margin-top: 29px;
	display: flex;
	flex-direction: column;
	gap: 47px;
`

export const LoadMoreButton = styled.button`
	width: 100%;
	height: 62px;
	color: ${COLORS.white};
	font-size: 24px;
	font-weight: 700;
	border-radius: 10px;
	background: ${COLORS.purple};
	margin-top: 74px;
	margin-bottom: 15px;
	border: 2px solid transition;
	transition: background 0.4s, color 0.4s;
	&:hover {
		background: ${COLORS.white};
		color: ${COLORS.purple};
		border: 2px solid ${COLORS.purple};
	}
`
export const TicketMessage = styled.p`
	color: ${COLORS.purple};
	text-align: center;
	width: 100%;
	font-size: 18px;
	font-weight: 700;
`
