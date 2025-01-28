import { useEffect } from 'react'

import Header from './components/Header/Header'
import FilterTickets from './components/FilterTickets/FilterTickets'
import styled from 'styled-components'
import TicketsContainer from './components/TicketsContainer/TicketsContainer'
import { Container } from './components/base/Container'

function App() {
	useEffect(() => {
		const getTickets = async () => {
			const resp = await fetch('http://localhost:5000/tickets')
			const data = await resp.json()
			console.log(data)
			return data
		}
		getTickets()
	}, [])
	const ContentWrapper = styled.div`
		padding-top: 122px;
		display: flex;
		gap: 50px;
	`
	return (
		<>
			<Header />
			<Container>
				<ContentWrapper>
					<FilterTickets />
					<TicketsContainer />
				</ContentWrapper>
			</Container>
		</>
	)
}

export default App
