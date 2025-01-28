import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTickets } from '../services/thunks'
import { TicketType } from '../../types/types'

interface TicketsState {
	tickets: TicketType[]
	loading: boolean
	error: string | null
}

const initialState: TicketsState = {
	tickets: [],
	loading: false,
	error: null,
}

export const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {},
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
					state.tickets = action.payload
				}
			)
			.addCase(fetchTickets.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export default ticketsSlice.reducer
