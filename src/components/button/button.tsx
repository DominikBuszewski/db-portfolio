import React, { AriaAttributes, DOMAttributes } from "react";
import styled from "styled-components";
import { colors, device } from "../../styles/main-styles.styles";

// declare module "react" {
// 	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
// 		inverted?: boolean;
// 	}
// }

const StyledButton = styled.button`
	padding: 1rem;
	min-width: 14rem;
	border-radius: 40px;
	font-size: 1.2rem;
	margin: 0.2rem;
	color: ${({ inverted }) =>
		inverted ? `${colors.white}` : `${colors.secondary}`};
	border: 2px solid ${colors.secondary};
	background-color: ${({ inverted }) =>
		inverted ? `${colors.secondary}` : `transparent`};

	@media ${device.tablet} {
		padding: 1.7rem;
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
