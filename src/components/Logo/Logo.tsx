import React, { FunctionComponent } from 'react'
import { LogoTitle, LogoWrapper } from './styled'
interface LogoProps {
	onlyImg?: boolean
}
const Logo: FunctionComponent<LogoProps> = ({ onlyImg }) => {
	return (
		<LogoWrapper>
			<img src='logo.svg' alt='logo' />{' '}
			{!onlyImg && <LogoTitle>Поиск авиабилетов</LogoTitle>}
		</LogoWrapper>
	)
}

export default Logo
