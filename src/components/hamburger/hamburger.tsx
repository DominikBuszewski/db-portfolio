import React from "react";
import styled from "styled-components";
import { device } from "../../styles/main-styles.styles";

const StyledhHamburgerWrapper = styled.div`
	display: block;

	@media ${device.desktop}, ${device.tablet} {
		display: none;
	}
	button {
		padding: 0.5rem;
		position: fixed;
		z-index: 100;
		top: 1rem;
		right: 1.5rem;
	}
`;

type Props = {
	menuHandler: any;
};

const Hamburger: React.FC<Props> = ({ menuHandler }) => (
	<StyledhHamburgerWrapper onClick={menuHandler}>
		<button>X</button>
	</StyledhHamburgerWrapper>
);

export default Hamburger;
