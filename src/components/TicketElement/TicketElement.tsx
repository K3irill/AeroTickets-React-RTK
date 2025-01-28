import React, { FunctionComponent } from 'react'
import { TicketType } from '../../types/types'
import {
	BottomInfo,
	InfoItem,
	Price,
	TextInfo,
	TicketContainer,
	TitleInfo,
	UpperInfo,
} from './styled'

const TicketElement: FunctionComponent<TicketType> = props => {
	console.log(props)
	return (
		<TicketContainer>
			<UpperInfo>
				<Price>{props.price}</Price>
				<img src='{props.company}.svg' />
			</UpperInfo>
			<BottomInfo>
				<InfoItem>
					<TitleInfo>SVO - LED</TitleInfo>
					<TextInfo>
						{props.from && props.to ? (
							<>
								<span>{props.from}</span>
								{' - '}
								<span>{props.to}</span>
							</>
						) : (
							'-'
						)}
					</TextInfo>
				</InfoItem>
				<InfoItem>
					<TitleInfo>В пути</TitleInfo>
					<TextInfo>
						<span>{props.duration ? props.duration : '-'}</span>
					</TextInfo>
				</InfoItem>
				<InfoItem>
					<TitleInfo>Пересадки</TitleInfo>
					<TextInfo>
						<span>{props.connectionAmount ? props.connectionAmount : '-'}</span>
					</TextInfo>
				</InfoItem>
			</BottomInfo>
		</TicketContainer>
	)
}

export default TicketElement
