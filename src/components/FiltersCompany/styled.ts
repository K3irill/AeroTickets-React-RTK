import styled from 'styled-components'
import { COLORS } from '../../assets/styles/constants'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 19px;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	opacity: 0;
	position: absolute;

	+ span {
		position: relative;
		padding-left: 34px;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 18px;
			height: 18px;
			border: 2px solid ${COLORS.purple};
			border-radius: 4px;
			background-color: transparent;
			transition: background-color 0.3s ease, border-color 0.3s ease;
		}

		&::after {
			content: url(/check.svg);
			position: absolute;
			left: 3px;
			top: 50%;
			transform: translateY(-50%);
			width: 17px;
			height: 20px;
			color: ${COLORS.purple};
			opacity: 0;
			transition: opacity 0.3s ease;
			font-size: 14px;
			text-align: center;
		}
	}

	&:checked + span::after {
		opacity: 1;
	}

	&:checked + span::before {
		border-color: ${COLORS.purple};
	}
`

export const Text = styled.span`
	color: ${COLORS.lavanda};
`
