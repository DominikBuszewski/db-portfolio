import React from "react";
import styled from "styled-components";
import { device } from "../../styles/main-styles.styles";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
	transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
	background: ${({ theme }) => theme.primary};
	transition: all ease-in-out 500ms;
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
		height: 50%;
		justify-content: space-around;
		align-items: center;

		@media ${device.tablet} {
			width: 60%;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			height: 100%;
		}

		@media ${device.desktop} {
			width: 40%;
		}

		.selected {
			background-color: ${({ theme }) => theme.secondary};
			border-radius: 10px;
		}

		li {
			cursor: pointer;
			text-align: center;
			font-size: 3rem;

			@media ${device.tablet} {
				font-size: 1.2rem;
			}

			a {
				text-align: center;
				text-decoration: none;
				color: ${({ theme }) => theme.white};
				padding: 0.5rem;

				:hover,
				:focus {
					border-top: 1px solid ${({ theme }) => theme.secondary};
					border-bottom: 1px solid ${({ theme }) => theme.secondary};
				}
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
					<NavLink exact={true} to="/" activeClassName="selected">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/projects" activeClassName="selected">
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to="/technologies" activeClassName="selected">
						Technologies
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" activeClassName="selected">
						Contact
					</NavLink>
				</li>
			</ul>
		</StyledNav>
	);
};
export default Navigation;
