import styled from 'styled-components'
import { BREAKPOINTS } from '../../assets/styles/constants'

export const Wrapper = styled.div`
	width: 275px;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	height: fit-content;
	gap: 47px;

	@media (max-width: ${BREAKPOINTS.tablet}) {
		display: none;
	}
`
