import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTickets } from '../services/thunks'
import { TicketType } from '../../types/types'

export enum Option {
	Cheap,
	Speed,
	Optimal,
}

interface Filters {
	company: string | null
	connectionAmount: number | null
	option: Option | null
}

interface TicketsState {
	allTickets: TicketType[]
	filteredTickets: TicketType[]
	filters: Filters
	loading: boolean
	error: string | null
}

const initialState: TicketsState = {
	allTickets: [],
	filteredTickets: [],
	filters: {
		company: null,
		connectionAmount: null,
		option: Option.Cheap,
	},
	loading: false,
	error: null,
}

export const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<Filters>) => {
			state.filters = action.payload

			state.filteredTickets = state.allTickets.filter(ticket => {
				const matchesCompany = state.filters.company
					? ticket.company === state.filters.company
					: true

				const matchesConnectionAmount =
					state.filters.connectionAmount !== null
						? ticket.connectionAmount === state.filters.connectionAmount
						: true

				return matchesCompany && matchesConnectionAmount
			})

			if (state.filters.option !== null) {
				switch (state.filters.option) {
					case Option.Cheap:
						state.filteredTickets.sort((a, b) => a.price - b.price)
						break
					case Option.Speed:
						state.filteredTickets.sort((a, b) => a.duration - b.duration)
						break
					case Option.Optimal:
						state.filteredTickets.sort((a, b) => {
							if (a.price === b.price) {
								return a.duration - b.duration
							}
							return a.price - b.price
						})
						break
					default:
						break
				}
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTickets.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				fetchTickets.fulfilled,
				(state, action: PayloadAction<TicketType[]>) => {
					state.loading = false
					state.allTickets = action.payload
					state.filteredTickets = action.payload
				}
			)
			.addCase(fetchTickets.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export const { setFilters } = ticketsSlice.actions
export default ticketsSlice.reducer
