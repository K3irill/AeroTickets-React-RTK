import React from 'react'
import Filter from '../Filter/Filter'

import { Wrapper } from './styled'

const FilterTickets = () => {
	return (
		<Wrapper>
			<Filter title='Количество Пересадок'>{<input type='radio' />}</Filter>
			<Filter title='Компании'>{<input type='checkbox' />}</Filter>
		</Wrapper>
	)
}

export default FilterTickets
