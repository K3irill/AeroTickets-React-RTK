import React, { useState } from 'react'
import {
	Container,
	TitleContainer,
	Content,
	OpenButton,
	FilterTitle,
} from './styled'
import FilterTransfers from '../FilterTransfers/FilterTransfers'
import FiltersCompany from '../FiltersCompany/FiltersCompany'

const MobileFilters = () => {
	const [openFilterMenu, setOpenFilterMenu] = useState<boolean>(false)

	const toggleFilterMenu = () => {
		setOpenFilterMenu(prev => !prev)
	}
	return (
		<Container isOpen={openFilterMenu}>
			<TitleContainer>
				<p>Авиакомпании, пересадки</p>

				<OpenButton isOpen={openFilterMenu} onClick={toggleFilterMenu}>
					<span>
						<img src='/arrow.svg' alt='open' />
					</span>
				</OpenButton>
			</TitleContainer>
			<Content>
				<div>
					<FilterTitle>Количество Пересадок</FilterTitle>
					<FilterTransfers isWhite />
				</div>
				<div>
					<FilterTitle>Компании</FilterTitle>
					<FiltersCompany isWhite />
				</div>
			</Content>
		</Container>
	)
}

export default MobileFilters
