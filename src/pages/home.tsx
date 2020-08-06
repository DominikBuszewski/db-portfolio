import React from "react";
import styled from "styled-components";
import { colors, device, fonts } from "../styles/main-styles.styles";

const StyledWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${colors.white};
	clip-path: polygon(65% 0, 100% 25%, 100% 81%, 0 100%, 0 0);

	h2,
	h3 {
		font-family: ${fonts.secondary};
	}
`;

const StyledButtonContainer = styled.div`
	width: 40%;
	margin: 2em auto;
	display: flex;
	justify-content: space-around;
`;

const HomePage: React.FC = () => (
	<StyledWrapper>
		<h3>Front End Developer </h3>
		<h1>Dominik Buszewski</h1>
		<StyledButtonContainer>
			<button>Projects</button>
			<button>Contacts</button>
		</StyledButtonContainer>
	</StyledWrapper>
);

export default HomePage;
