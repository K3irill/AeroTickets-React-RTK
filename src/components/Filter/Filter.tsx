import React, { FunctionComponent } from 'react'
import { FilterContainer, FilterContent, FilterTitle } from './styled'
interface FilterProps {
	title: string
	children: React.ReactNode
}
const Filter: FunctionComponent<FilterProps> = ({ title, children }) => {
	return (
		<FilterContainer>
			<FilterTitle>{title}</FilterTitle>
			<FilterContent>{children}</FilterContent>
		</FilterContainer>
	)
}

export default Filter
