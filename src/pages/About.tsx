import React from "react";
import styled from "styled-components";
import { device } from "../styles/main-styles.styles";

const StyledBackground = styled.div`
	background-color: ${({ theme }) => theme.secondary};
	width: 100vw;
	height: 100vh;
`;

const StyledAbout = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.white};
	clip-path: polygon(65% 0, 100% 25%, 100% 81%, 0 100%, 0 0);

	@media ${device.tablet} {
		clip-path: polygon(100% 0, 100% 25%, 100% 81%, 0 100%, 0 0);

		p {
			width: 50%;
		}
	}

	@media ${device.desktop} {
		clip-path: polygon(100% 0, 100% 25%, 100% 81%, 0 100%, 0 0);
	}
`;

const Wrapper = styled.div`
	width: 80%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const About = () => (
	<StyledBackground>
		<StyledAbout>
			<Wrapper>
				<h1>hello</h1>
				<p>
					{" "}
					My name is Dominik Buszewski, I am a 29 years old project manager
					working in LG Chem Wrocław Energy. For the last year I've been
					learning front end technology.
				</p>
			</Wrapper>
		</StyledAbout>
	</StyledBackground>
);

export default About;
