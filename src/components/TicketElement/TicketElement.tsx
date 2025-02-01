import React, { FunctionComponent } from 'react'
import { TicketType } from '../../types/types'
import {
	BottomInfo,
	ImgWrapper,
	InfoItem,
	Price,
	TextInfo,
	TicketContainer,
	TitleInfo,
	UpperInfo,
} from './styled'
import { formatMinutesToHours } from '../../utils/formatMinuteToHours'

const TicketElement: FunctionComponent<TicketType> = props => {
	console.log(props)
	return (
		<TicketContainer>
			<UpperInfo>
				<Price>{props.price} Р</Price>
				<ImgWrapper>
					<img src={`${props.company}.svg`} />
				</ImgWrapper>
			</UpperInfo>
			<BottomInfo>
				<InfoItem>
					<TitleInfo>SVO - LED</TitleInfo>
					<TextInfo>
						{props.from && props.to ? (
							<>
								<span>{props.time.departure}</span>
								{' - '}
								<span>{props.time.arrival}</span>
							</>
						) : (
							'-'
						)}
					</TextInfo>
				</InfoItem>
				<InfoItem>
					<TitleInfo>В пути</TitleInfo>
					<TextInfo>
						<span>
							{props.duration ? formatMinutesToHours(props.duration) : '-'}
						</span>
					</TextInfo>
				</InfoItem>
				<InfoItem>
					<TitleInfo>Пересадки</TitleInfo>
					<TextInfo>
						<span>
							{props.connectionAmount
								? props.connectionAmount
								: 'Без пересадок'}
						</span>
					</TextInfo>
				</InfoItem>
			</BottomInfo>
		</TicketContainer>
	)
}

export default TicketElement
