import React, { useState } from 'react'
import { Wrapper, Checkbox, Text } from './styled'
import { AppDispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../store/slices/ticketsSlice'
import { companyOptions } from './companyOptions'

interface FiltersCompanyProps {
	isWhite?: boolean
}

const FiltersCompany = ({ isWhite }: FiltersCompanyProps) => {
	const dispatch = useDispatch<AppDispatch>()
	const { connectionAmount, option } = useSelector(
		(state: RootState) => state.tickets.filters
	)

	const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])

	const handleChange = (company: string | null) => {
		let updatedCompanies: string[]

		if (company === null) {
			updatedCompanies = []
		} else if (selectedCompanies.includes(company)) {
			updatedCompanies = selectedCompanies.filter(item => item !== company)
		} else {
			updatedCompanies = [...selectedCompanies, company]
		}

		setSelectedCompanies(updatedCompanies)

		dispatch(
			setFilters({
				companies: updatedCompanies.length === 0 ? [] : updatedCompanies,
				connectionAmount,
				option,
			})
		)
	}

	return (
		<Wrapper>
			{companyOptions.map(option => (
				<label key={option.id}>
					<Checkbox
						whiteMode={isWhite}
						onChange={() => handleChange(option.value)}
						type='checkbox'
						id={option.id}
						checked={
							option.value === null
								? selectedCompanies.length === 0
								: selectedCompanies.includes(option.value)
						}
					/>
					<Text>{option.label}</Text>
				</label>
			))}
		</Wrapper>
	)
}

export default FiltersCompany
