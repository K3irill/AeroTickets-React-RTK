import React, { useEffect, useState } from 'react'
import CostOptions from '../CostOptions/CostOptions'
import { ContainerStyled, TicketsList } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../../store/services/thunks'
import TicketElement from '../TicketElement/TicketElement'
import { TicketType } from '../../types/types'
import { RootState } from '../../store/store'

const TicketsContainer = () => {
	const dispatch = useDispatch()
	const { tickets, loading, error } = useSelector(
		(state: RootState) => state.tickets
	)

	useEffect(() => {
		dispatch(fetchTickets())
		console.log(tickets)
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
				{tickets && tickets.length > 0 ? (
					tickets.map(ticket => (
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
