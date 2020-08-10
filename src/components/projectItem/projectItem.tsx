import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import { device } from "../../styles/main-styles.styles";

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

	a {
		overflow: hidden;
		cursor: pointer;
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

	:hover {
		transform: scale(1.2);
		transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}
`;

const TechContainer = styled.section`
	margin: 1em auto;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
	border-top: 2px solid ${({ theme }) => theme.fifth};
	border-bottom: 2px solid ${({ theme }) => theme.fifth};

	@media ${device.tablet} {
		width: 90%;
		padding: 0.5em;
	}

	p {
		font-weight: bold;
		font-family: ${({ theme }) => theme.fonts.subFont};
		text-align: center;
		color: ${({ theme }) => theme.white};
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
			<a href="https://parfum-shop.herokuapp.com/" target="_blank">
				<StyledImage src={parfum} alt="project image" />
			</a>
		</Wrapper>
		<Wrapper>
			<StyledInformationPanel>
				<h2>Parfum</h2>
				<p>
					Ecommerce shop with parfums, project created with React where I for
					the first time connected to a databse (Firebase)
				</p>

				<TechContainer>
					<p>React</p>
					<p>React-router</p>
					<p>Git</p>
					<p>Styled-components</p>
					<p>Firebase</p>
					<p>yarn</p>
				</TechContainer>
				<ButtonContainer>
					<Button name={"Code"} />

					<Button inverted name={"Demo"} />
				</ButtonContainer>
			</StyledInformationPanel>
		</Wrapper>
	</StyledProjectItem>
);

export default ProjectItem;
