import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../api/api'
import { TicketType } from '../../types/types'

export const fetchTickets = createAsyncThunk<TicketType[], void>(
	'tickets/fetchTickets',
	async (_, { rejectWithValue }) => {
		try {
			const response = await instance.get<{ data: TicketType[] }>('/tickets')
			return response.data
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
			return rejectWithValue('Не удалось загрузить билеты')
		}
	}
)
