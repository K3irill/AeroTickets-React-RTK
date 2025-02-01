import React, { FunctionComponent } from 'react'
import { LogoTitle, LogoWrapper } from './styled'

const Logo: FunctionComponent = () => {
	return (
		<LogoWrapper>
			<img src='logo.svg' alt='logo' /> <LogoTitle>Поиск авиабилетов</LogoTitle>
		</LogoWrapper>
	)
}

export default Logo
