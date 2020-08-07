import React from "react";
import styled from "styled-components";
import { device } from "../../styles/main-styles.styles";
import { NavLink } from "react-router-dom";

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
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.primary};

	@media ${device.tablet} {
		width: 70%;
		height: 10vh;
		transform: translateX(0%);
		transition: 0s ease;
		background-color: transparent;
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
			cursor: pointer;

			font-size: 2rem;
			padding: 0.5rem;

			:hover {
				border-top: 1px solid ${({ theme }) => theme.secondary};
				border-bottom: 1px solid ${({ theme }) => theme.secondary};
			}

			@media ${device.tablet} {
				font-size: 1.2rem;
			}

			a {
				text-decoration: none;
				color: ${({ theme }) => theme.white};
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
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/technologies">Technologies</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</StyledNav>
	);
};
export default Navigation;
