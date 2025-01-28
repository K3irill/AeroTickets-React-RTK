import styled from 'styled-components'
import { COLORS } from '../../assets/styles/constants'

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;

  img{
    width: 100%,
    height: 100% 
  } s

`

export const LogoTitle = styled.p`
	color: ${COLORS.purple};
	font-size: 24px;
	font-weight: 700;
`
