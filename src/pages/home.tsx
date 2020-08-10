import React from "react";
import styled from "styled-components";
import { device } from "../styles/main-styles.styles";
import Button from "../components/button/button";
import { motion } from "framer-motion";

const StyledBackground = styled(motion.div)`
	background-color: ${({ theme }) => theme.secondary};
	width: 100vw;
	height: 100vh;
`;

const StyledWrapper = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.white};
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
		font-family: ${({ theme }) => theme.fonts.subFont};
		@media ${device.desktop} {
			font-size: 5em;
		}
	}
	h3 {
		@media ${device.desktop} {
			font-size: 3em;
		}
	}
`;

const StyledButtonContainer = styled(motion.div)`
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
			<StyledButtonContainer
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Button prop={fakeclick} name={"Projects"} />

				<Button inverted prop={fakeclick} name={"Contact"} />
			</StyledButtonContainer>
		</StyledWrapper>
	</StyledBackground>
);

export default HomePage;
