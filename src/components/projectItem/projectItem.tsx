import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import { device } from "../../styles/main-styles.styles";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Reactrouter } from "@styled-icons/simple-icons/Reactrouter";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { Firebase } from "@styled-icons/simple-icons/Firebase";

const FirebaseLogo = styled(Firebase)`
	width: 3rem;

	@media ${device.tablet} {
		width: 5rem;
	}
`;

const StyledComponentsLogo = styled(StyledComponents)`
	width: 3rem;
	@media ${device.tablet} {
		width: 5rem;
	}
`;

const GitLogo = styled(Git)`
	width: 3rem;
	@media ${device.tablet} {
		width: 5rem;
	}
`;
const RouterLogo = styled(Reactrouter)`
	width: 3rem;
	@media ${device.tablet} {
		width: 5rem;
	}
`;

const RLogo = styled(ReactLogo)`
	width: 3rem;
	@media ${device.tablet} {
		width: 5rem;
	}
`;

const parfum = require("../../assets/images/parfum.JPG");

// interface ImgProps {
// 	readonly asd: String;
// }

const StyledProjectItem = styled.div`
	width: 80%;
	margin: 1rem auto;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	@media ${device.desktop} {
		flex-direction: row;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 98%;
	margin: 1em 0;

	@media ${device.tablet} {
		width: 50%;
		margin: 0 0;
	}
`;

const StyledInformationPanel = styled.div`
	width: 100%;
	color: ${({ theme }) => theme.white};

	h2 {
		width: 100%;
		font-size: 3rem;
		font-family: ${({ theme }) => theme.fonts.subFont};
		margin: 0.2em auto;

		@media ${device.tablet} {
			width: 80%;
		}
	}

	p {
		margin: 1em auto;
		width: 100%;

		@media ${device.tablet} {
			width: 80%;
			font-size: 1.4rem;
		}
	}
`;

const StyledImage = styled.img`
	width: 100%;
`;

const IconContainer = styled.section`
	margin: 2em auto;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	border-top: 2px solid ${({ theme }) => theme.fifth};
	border-bottom: 2px solid ${({ theme }) => theme.fifth};

	@media ${device.tablet} {
		width: 60%;
		padding: 0.5em;
	}
`;

const ButtonContainer = styled.section`
	width: 80%;
	margin: 1em auto;
	display: flex;
	flex-direction: column;

	@media ${device.tablet} {
		flex-direction: row;
		justify-content: space-around;
	}
`;

const ProjectItem = () => (
	<StyledProjectItem>
		<Wrapper>
			<StyledImage src={parfum} alt="project image" />
		</Wrapper>
		<Wrapper>
			<StyledInformationPanel>
				<h2>Parfum</h2>
				<p>
					Ecommerce shop with parfums, project created with React where I for
					the first time connected to a databse (Firebase)
				</p>
				<p>
					Site is uploaded on Heroku so it may take some time to wake up from
					hibernation state
				</p>
				<IconContainer>
					<RLogo />

					<RouterLogo />
					<GitLogo />
					<StyledComponentsLogo />
					<FirebaseLogo />
				</IconContainer>
				<ButtonContainer>
					<Button name={"Code"} />
					<Button inverted name={"Demo"} />
				</ButtonContainer>
			</StyledInformationPanel>
		</Wrapper>
	</StyledProjectItem>
);

export default ProjectItem;
