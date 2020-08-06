import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../navigation/navigation.component";
import { device, colors } from "../../styles/main-styles.styles";
import Hamburger from "../hamburger/hamburger";

const StyledHeader = styled.header`
	width: 100vw;
	height: 10vh;
	position: absolute;
	top: 0;
	right: 0;

	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;

	@media ${device.tablet} {
		height: 8vh;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	div {
		margin-left: 0.5em;
		text-align: center;
		font-size: 2rem;
		color: ${colors.white};

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
			<div>
				<div>DB</div>
			</div>

			<Hamburger menuHandler={MenuHandler} />
			<Navigation menuHandler={MenuHandler} open={open} />
		</StyledHeader>
	);
};

export default Header;
