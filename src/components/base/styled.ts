import styled from 'styled-components'

import { BREAKPOINTS } from '../../assets/styles/constants'

export const ContainerStyled = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 15px;

	@media (min-width: ${BREAKPOINTS.medium}) {
		padding: 0 30px;
	}
`
