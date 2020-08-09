import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/section-header/section-header";
import TechnologyIconWrapper from "../components/technology-icon-wrapper/TechnologyIconWrapper";
import { device } from "../styles/main-styles.styles";
const MonitorSVG = require("../assets/images/Coding_SVG.svg");

const StyledTechnologies = styled.div`
	background-color: ${({ theme }) => theme.fifth};
	min-height: 70vh;

	@media ${device.tablet} {
		height: 100vh;
	}
`;

const Spacer = styled.div`
	height: 10vh;
	width: 100%;
`;

const TechWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.fifth};
	padding: 1em;

	@media ${device.tablet} {
		flex-direction: row;
		justify-content: space-around;
	}

	img {
		height: 30%;
		width: 60%;
		margin-top: 4em;

		@media ${device.tablet} {
			height: 100%;
			width: 20%;
			margin-top: 0;
		}
	}
`;

const Technologies = () => (
	<StyledTechnologies>
		<Spacer />
		<SectionHeader
			title="Technologies"
			paragraph="Stack of technolgies that I'm currently using in my projects or learning"
		/>
		<TechWrapper>
			<TechnologyIconWrapper />
			<img src={MonitorSVG} alt="monitor SVG" />
		</TechWrapper>
	</StyledTechnologies>
);

export default Technologies;
