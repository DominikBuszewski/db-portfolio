import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../navigation/navigation.component";
import { device } from "../../styles/main-styles.styles";
import Hamburger from "../hamburger/hamburger";

const StyledHeader = styled.header`
	width: 100vw;
	position: absolute;
	top: 0;
	right: 0;
	height: 10vh;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	/* background-color: ${({ theme }) => theme.primary}; */

	@media ${device.tablet} {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	div {
		margin-left: 0.5em;
		text-align: center;
		font-size: 2rem;
		color: ${({ theme }) => theme.white};

		@media ${device.tablet} {
			margin-left: 4rem;
		}
	}
`;

const Header: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	const MenuHandler = (): any => {
		setOpen((prevState) => !prevState);
		console.log(open);
	};

	return (
		<StyledHeader>
			<Hamburger menuHandler={MenuHandler} open={open} />
			<Navigation menuHandler={MenuHandler} open={open} />
		</StyledHeader>
	);
};

export default Header;
