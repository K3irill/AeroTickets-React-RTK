import React from 'react'
import { Wrapper, Radio, Text } from './styled'
import { AppDispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../store/slices/ticketsSlice'
interface FilterTransfersProps {
	isWhite?: boolean
}
const FilterTransfers = ({ isWhite }: FilterTransfersProps) => {
	const dispatch = useDispatch<AppDispatch>()
	const { companies, option } = useSelector(
		(state: RootState) => state.tickets.filters
	)
	return (
		<Wrapper>
			<label>
				<Radio
					onChange={() =>
						dispatch(
							setFilters({
								companies,
								connectionAmount: null,
								option,
							})
						)
					}
					whiteMode={isWhite}
					type='radio'
					name='transfers'
					id='0'
					value=''
				/>
				<Text>Все</Text>
			</label>
			<label>
				<Radio
					onChange={e =>
						dispatch(
							setFilters({
								companies,
								connectionAmount: +e.target.value,
								option,
							})
						)
					}
					whiteMode={isWhite}
					type='radio'
					name='transfers'
					id='0'
					value='0'
				/>
				<Text>Без Пересадок</Text>
			</label>
			<label>
				<Radio
					onChange={e =>
						dispatch(
							setFilters({
								companies,
								connectionAmount: +e.target.value,
								option,
							})
						)
					}
					whiteMode={isWhite}
					type='radio'
					name='transfers'
					id='1'
					value='1'
				/>
				<Text>1 Пересадка</Text>
			</label>
			<label>
				<Radio
					onChange={e =>
						dispatch(
							setFilters({
								companies,
								connectionAmount: +e.target.value,
								option,
							})
						)
					}
					whiteMode={isWhite}
					type='radio'
					name='transfers'
					id='2'
					value='2'
				/>
				<Text>2 Пересадки</Text>
			</label>
			<label>
				<Radio
					onChange={e =>
						dispatch(
							setFilters({
								companies,
								connectionAmount: +e.target.value,
								option,
							})
						)
					}
					whiteMode={isWhite}
					type='radio'
					name='transfers'
					id='3'
					value='3'
				/>
				<Text>3 Пересадки</Text>
			</label>
		</Wrapper>
	)
}

export default FilterTransfers
