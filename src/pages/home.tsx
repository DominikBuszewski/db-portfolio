import React from "react";
import styled from "styled-components";
import { colors, device, fonts } from "../styles/main-styles.styles";
import Button from "../components/button/button";

const StyledBackground = styled.div`
	background-color: #f5587b;
	width: 100vw;
	height: 100vh;
`;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${colors.white};
	clip-path: polygon(65% 0, 100% 25%, 100% 81%, 0 100%, 0 0);

	@media ${device.tablet} {
		clip-path: polygon(100% 0, 100% 25%, 100% 81%, 0 100%, 0 0);
	}

	@media ${device.desktop} {
		clip-path: polygon(100% 0, 100% 25%, 100% 81%, 0 100%, 0 0);
	}

	h1 {
		font-size: 3em;
		text-align: center;
		@media ${device.desktop} {
			font-size: 5em;
		}
	}
	h3 {
		font-family: ${fonts.secondary};

		@media ${device.desktop} {
			font-size: 3em;
		}
	}
`;

const StyledButtonContainer = styled.div`
	width: 40%;
	max-width: 20rem;
	margin: 2em auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media ${device.tablet} {
		flex-direction: row;
		width: 35rem;
		max-width: 60%;
		justify-content: space-between;
		align-items: center;
	}
`;

const fakeclick = () => {
	console.log("click");
};

const HomePage: React.FC = () => (
	<StyledBackground>
		<StyledWrapper>
			<h3>Front End Developer </h3>
			<h1>Dominik Buszewski</h1>
			<StyledButtonContainer>
				<Button inverted={true} prop={fakeclick} name={"Projects"} />

				<Button inverted={false} prop={fakeclick} name={"Contact"} />
			</StyledButtonContainer>
		</StyledWrapper>
	</StyledBackground>
);

export default HomePage;
