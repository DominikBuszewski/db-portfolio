import React from "react";
import styled from "styled-components";
import { device } from "../../styles/main-styles.styles";

const StyledhHamburgerWrapper = styled.button`
	display: inline-block;
	position: absolute;
	z-index: 100;
	border: none;
	outline: none;
	top: 1rem;
	background: transparent;
	right: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 2rem;
	height: 2rem;

	@media ${device.desktop}, ${device.tablet} {
		display: none;
	}
`;

type Hamprops = {
	open: boolean;
};

const HamburgerLine1 = styled.div<Hamprops>`
	display: inline-block;
	background-color: ${({ theme }) => theme.white};
	height: 4px;
	width: 100%;
	transition: all ease-in-out 500ms;
	transform: ${({ open }) =>
		open ? "translateY(14px) rotate(45deg)" : "translateX(0px) rotate(0deg)"};
`;

const HamburgerLine2 = styled.div<Hamprops>`
	display: inline-block;
	background-color: ${({ theme }) => theme.white};
	height: 4px;
	width: 100%;
	transition: all ease-in-out 500ms;
	opacity: ${({ open }) => (open ? "0" : "1")};
`;

const HamburgerLine3 = styled.div<Hamprops>`
	display: inline-block;
	background-color: ${({ theme }) => theme.white};
	height: 4px;
	width: 100%;
	transition: all ease-in-out 500ms;

	transform: ${({ open }) =>
		open ? "translateY(-8px) rotate(-45deg)" : "translateX(0px) rotate(0deg)"};
`;

type Props = {
	menuHandler: any;
	open: boolean;
};

const Hamburger: React.FC<Props> = ({ menuHandler, open }) => (
	<StyledhHamburgerWrapper onClick={menuHandler}>
		<HamburgerLine1 open={open}></HamburgerLine1>
		<HamburgerLine2 open={open}></HamburgerLine2>
		<HamburgerLine3 open={open}></HamburgerLine3>
	</StyledhHamburgerWrapper>
);

export default Hamburger;
