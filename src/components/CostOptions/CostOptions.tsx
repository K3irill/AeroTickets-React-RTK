import React from 'react'
import { ButtonStyled, OptionsContainer } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { Option, setFilters } from '../../store/slices/ticketsSlice'
import { AppDispatch, RootState } from '../../store/store'

const CostOptions = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { companies, connectionAmount, option } = useSelector(
		(state: RootState) => state.tickets.filters
	)
	return (
		<OptionsContainer>
			<ButtonStyled
				onClick={() =>
					dispatch(
						setFilters({
							companies,
							connectionAmount,
							option: Option.Cheap,
						})
					)
				}
				isActive={option === Option.Cheap}
			>
				Самый дешевый
			</ButtonStyled>
			<ButtonStyled
				onClick={() =>
					dispatch(
						setFilters({
							companies,
							connectionAmount,
							option: Option.Speed,
						})
					)
				}
				isActive={option === Option.Speed}
			>
				Самый быстрый
			</ButtonStyled>
			<ButtonStyled
				onClick={() =>
					dispatch(
						setFilters({
							companies,
							connectionAmount,
							option: Option.Optimal,
						})
					)
				}
				isActive={option === Option.Optimal}
			>
				Самый оптимальный
			</ButtonStyled>
		</OptionsContainer>
	)
}

export default CostOptions
