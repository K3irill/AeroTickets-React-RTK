export interface TicketTime {
	departure: string
	arrival: string
}

export interface TicketType {
	id: number
	from: string
	to: string
	company: string
	price: number
	currency: string
	time: TicketTime
	duration: number
	date: string
	connectionAmount: number | null
}
