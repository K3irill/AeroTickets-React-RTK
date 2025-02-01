import React, { useEffect } from 'react'
import CostOptions from '../CostOptions/CostOptions'
import { ContainerStyled, TicketsList } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../../store/services/thunks'
import TicketElement from '../TicketElement/TicketElement'

import { AppDispatch, RootState } from '../../store/store'

const TicketsContainer = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { allTickets, loading, error } = useSelector(
		(state: RootState) => state.tickets
	)
	const filteredTickets = useSelector(
		(state: RootState) => state.tickets.filteredTickets
	)

	useEffect(() => {
		dispatch(fetchTickets())
		console.log(allTickets)
		console.log(filteredTickets)
	}, [dispatch])

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
					filteredTickets.map(ticket => (
						<TicketElement key={ticket.id} {...ticket}></TicketElement>
					))
				) : (
					<div>Нет доступных билетов</div>
				)}
			</TicketsList>
		</ContainerStyled>
	)
}

export default TicketsContainer
