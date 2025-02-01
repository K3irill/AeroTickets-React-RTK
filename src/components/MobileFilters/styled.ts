import styled, { css } from 'styled-components'
import { BREAKPOINTS, COLORS } from '../../assets/styles/constants'
interface ContainerProps {
	isOpen: boolean
}
export const Container = styled.div<ContainerProps>`
	@media (min-width: ${BREAKPOINTS.tabletAbove}) {
		display: none;
	}
	margin-top: 10px;
	width: 100%;

	max-height: 44px;
	background: ${COLORS.purple};
	border-radius: 10px;
	color: ${COLORS.white};
	transition: max-height 1s;
	overflow: hidden;
	${p =>
		p.isOpen &&
		css`
			max-height: 1000px;
		`}
`
export const TitleContainer = styled.div`
	display: flex;
	height: 44px;
	padding: 0 23px;
	align-items: center;
	position: relative;

	@media (max-width: ${BREAKPOINTS.tablet}) {
		padding: 0 10px;
		p {
			font-size: 12px;
			font-weight: 500;
		}
	}
`
export const Content = styled.div`
	display: flex;
	padding: 5px 24px 40px 24px;
	gap: 40px 66px;
	flex-wrap: wrap;

	@media (max-width: ${BREAKPOINTS.mobile}) {
		flex-direction: column-reverse;
	}
`
type OpenButtonType = {
	isOpen: boolean
}
export const OpenButton = styled.button<OpenButtonType>`
	position: absolute;
	right: 23px;
	background: transparent;
	display: flex;
	align-items: center;
	&:before {
		content: 'Открыть настройки';
		color: ${COLORS.white};
	}
	span {
		margin-left: 10px;
		transition: transform 0.4s;
	}

	${p =>
		p.isOpen &&
		css`
			span {
				transform: rotate(180deg);
			}
		`}

	@media (max-width: ${BREAKPOINTS.mobile}) {
		&:before {
			content: '';
		}
	}
`
export const FilterTitle = styled.p`
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 12px;
`
