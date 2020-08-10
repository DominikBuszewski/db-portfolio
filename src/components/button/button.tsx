import React, { AriaAttributes, DOMAttributes } from "react";
import styled, { css } from "styled-components";
import { device } from "../../styles/main-styles.styles";
import { AnySoaRecord } from "dns";

// declare module "react" {
// 	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
// 		inverted?: boolean;
// 	}
// }

interface Props {
	inverted?: boolean;
}

const StyledButton = styled.button<Props>`
	padding: 1.5rem 2rem;
	min-width: 14rem;
	outline: none;
	border-radius: 40px;
	font-size: 1.2rem;
	margin: 0.2rem;
	cursor: pointer;
	color: ${({ theme }) => theme.primary};
	border: 2px solid ${({ theme }) => theme.secondary};
	background-color: ${({ theme }) => theme.secondary};


	${({ inverted }) =>
		inverted &&
		css`
			background-color: transparent;
			color: ${({ theme }) => theme.secondary};
			border: 2px solid ${({ theme }) => theme.secondary};
		`}


	@media ${device.tablet} {
		/* padding: 1.7rem; */
		min-width: 16rem;
	}
`;

type ButtonProps = {
	name: String;
	prop?: any;
	inverted?: boolean;
};

const Button: React.FC<ButtonProps> = ({ name, prop, inverted }) => (
	<StyledButton inverted={inverted} onClick={prop}>
		{name}
	</StyledButton>
);

export default Button;
