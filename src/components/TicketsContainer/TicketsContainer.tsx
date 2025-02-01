import React, { useEffect, useState } from 'react'
import CostOptions from '../CostOptions/CostOptions'
import { ContainerStyled, LoadMoreButton, TicketsList } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../../store/services/thunks'
import TicketElement from '../TicketElement/TicketElement'
import { AppDispatch, RootState } from '../../store/store'

const TicketsContainer = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { loading, error } = useSelector((state: RootState) => state.tickets)
	const filteredTickets = useSelector(
		(state: RootState) => state.tickets.filteredTickets
	)

	const [visibleTickets, setVisibleTickets] = useState(3)

	useEffect(() => {
		dispatch(fetchTickets())
	}, [dispatch])

	const handleLoadMore = () => {
		setVisibleTickets(prev => prev + 3)
	}

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<ContainerStyled>
			<CostOptions />
			<TicketsList>
				{filteredTickets && filteredTickets.length > 0 ? (
					filteredTickets
						.slice(0, visibleTickets)
						.map(ticket => (
							<TicketElement key={ticket.id} {...ticket}></TicketElement>
						))
				) : (
					<div>Нет доступных билетов</div>
				)}
			</TicketsList>

			{filteredTickets && filteredTickets.length > visibleTickets && (
				<LoadMoreButton onClick={handleLoadMore}>
					Загрузить еще билеты
				</LoadMoreButton>
			)}
		</ContainerStyled>
	)
}

export default TicketsContainer
