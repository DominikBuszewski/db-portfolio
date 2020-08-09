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
	top: 0px;
	right: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
	background: ${({ theme }) => theme.primary};
	z-index: 5;

	@media ${device.tablet} {
		height: 10vh;
		align-items: center;
		justify-content: flex-end;
		transform: translateX(0%);
		transition: 0s ease;
		background-color: transparent;
	}

	@media ${device.desktop} {
	}
	ul {
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;

		@media ${device.tablet} {
			width: 40%;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			height: 100%;
		}

		li {
			cursor: pointer;
			text-align: center;
			font-size: 3rem;
			padding: 0.5rem;

			:hover {
				border-top: 1px solid ${({ theme }) => theme.secondary};
				border-bottom: 1px solid ${({ theme }) => theme.secondary};
			}

			@media ${device.tablet} {
				font-size: 1.2rem;
			}

			a {
				text-align: center;
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
