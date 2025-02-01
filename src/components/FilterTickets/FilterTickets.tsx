import React from 'react'
import Filter from '../Filter/Filter'

import { Wrapper } from './styled'
import FilterTransfers from '../FilterTransfers/FilterTransfers'
import FiltersCompany from '../FiltersCompany/FiltersCompany'

const FilterTickets = () => {
	return (
		<Wrapper>
			<Filter title='Количество Пересадок'>
				<FilterTransfers />
			</Filter>
			<Filter title='Компании'>
				<FiltersCompany />
			</Filter>
		</Wrapper>
	)
}

export default FilterTickets
