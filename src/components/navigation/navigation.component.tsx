import React, { AriaAttributes, DOMAttributes } from "react";
import styled from "styled-components";
import { colors, device } from "../../styles/main-styles.styles";

declare module "react" {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		open?: boolean;
		inverted?: boolean;
	}
}

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 50;
	display: flex;
	width: 100vw;
	height: 100vh;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-300%)")};
	align-items: center;
	justify-content: center;
	background: ${colors.primary};

	@media ${device.tablet} {
		width: 70%;
		height: 10vh;
		transform: translateX(0%);
		transition: 0s ease;
	}

	@media ${device.desktop} {
		width: 40%;
		height: 10vh;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		@media ${device.tablet} {
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
		}

		li {
			color: ${colors.white};
			font-size: 2rem;
			padding: 0.5rem;

			@media ${device.tablet} {
				font-size: 1.2rem;
			}
		}
	}
`;

// type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type OpenType = {
	menuHandler: any;
	open: boolean;
};

const Navigation: React.FC<OpenType> = ({ menuHandler, open }) => {
	return (
		<StyledNav open={open}>
			<ul>
				<li>Home</li>
				<li>Projects</li>
				<li>Technologies</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</StyledNav>
	);
};
export default Navigation;
