import { FunctionComponent } from 'react'
import { ContainerStyled } from './styled'
interface ContainerProps {
	className?: string
	children: React.ReactNode | string
}
export const Container: FunctionComponent<ContainerProps> = props => (
	<ContainerStyled className={props.className}>
		{props.children}
	</ContainerStyled>
)
