import styled from 'styled-components'
import { COLORS } from '../../assets/styles/constants'

export const TicketContainer = styled.div`
	background: ${COLORS.grey};
	border-radius: 10px;
	padding: 27px 40px;
	display: flex;
	flex-direction: column;
	gap: 25px;
`
export const UpperInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Price = styled.div`
	color: ${COLORS.purple};
	font-weight: 700;
	font-size: 32px;
`
export const ImgWrapper = styled.div`
	width: 180px;
	height: 51px;

	img {
		width: 100%;
		height: 100%;
	}
`

export const BottomInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const InfoItem = styled.p``
export const TitleInfo = styled.p`
	color: ${COLORS.lavanda};
`
export const TextInfo = styled.p`
	* {
		color: ${COLORS.purple};
	}
`
