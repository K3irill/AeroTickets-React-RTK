import styled from 'styled-components'
import { COLORS } from '../../assets/styles/constants'
interface RadioProps {
	whiteMode: boolean
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 19px;
`

export const Radio = styled.input.attrs<RadioProps>({ type: 'radio' })`
	opacity: 0;
	position: absolute;

	+ span {
		position: relative;
		padding-left: 34px;
		color: ${p => (p.whiteMode ? COLORS.white : COLORS.lavanda)};

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 18px;
			height: 18px;
			border: 2px solid ${p => (p.whiteMode ? COLORS.white : COLORS.purple)};
			border-radius: 50%;
			background-color: transparent;
			transition: background-color 0.3s ease, border-color 0.3s ease;
		}

		&::after {
			content: '';
			position: absolute;
			left: 3px;
			top: 50%;
			transform: translateY(-50%);
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background-color: ${p => (p.whiteMode ? COLORS.white : COLORS.purple)};
			opacity: 0;
			transition: opacity 0.3s ease;
		}
	}

	&:checked + span::after {
		opacity: 1;
	}
`

export const Text = styled.span``
