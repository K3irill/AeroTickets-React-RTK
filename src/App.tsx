import Header from './components/Header/Header'
import FilterTickets from './components/FilterTickets/FilterTickets'
import styled from 'styled-components'
import TicketsContainer from './components/TicketsContainer/TicketsContainer'
import { Container } from './components/base/Container'

function App() {
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
