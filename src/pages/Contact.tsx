import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/section-header/section-header";
import { Email } from "@styled-icons/entypo/Email";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { device } from "../styles/main-styles.styles";
import { motion } from "framer-motion";

const EmailLogo = styled(Email)`
	width: 4rem;
	color: ${({ theme }) => theme.white};
`;
const LinkedinLogo = styled(LinkedinSquare)`
	width: 4rem;
	color: ${({ theme }) => theme.white};
`;
const GithubLogo = styled(Github)`
	width: 4rem;
	color: ${({ theme }) => theme.white};
`;

const StyledContact = styled.div`
	min-height: 100vh;
	background-color: ${({ theme }) => theme.blue};
	overflow-x: hidden;
`;

const Spacer = styled.div`
	height: 10vh;
	width: 100%;
	background-color: ${({ theme }) => theme.blue};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-arounds;
	align-items: center;
	width: 90%;
	margin: 0 auto;

	@media ${device.desktop} {
		flex-direction: row;
		width: 80%;
		height: 71vh;
	}
`;

const StyledContactForm = styled.div`
	width: 100%;
	height: 50vh;

	* {
		margin: 0.3em 0;
		color: ${({ theme }) => theme.white};
		outline-color: ${({ theme }) => theme.primary};
		border-radius: 10px;
	}

	form {
		display: flex;
		flex-direction: column;

		label {
			color: ${({ theme }) => theme.white};
			font-weight: bold;
		}

		input {
			border: 1px solid ${({ theme }) => theme.fifth};
			background-color: ${({ theme }) => theme.primary};
			height: 2.5rem;
		}

		textarea {
			background-color: ${({ theme }) => theme.primary};
			border: 1px solid ${({ theme }) => theme.fifth};
		}

		button {
			background-color: ${({ theme }) => theme.secondary};
			border: none;
			width: 50%;
			margin: 1em auto 0 0;
			padding: 1rem;
			cursor: pointer;

			:hover {
				opacity: 0.9;
			}
		}
	}
`;

const StyledContactInfoWrapper = styled(motion.div)`
	width: 100%;
	height: 50vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;

	@media ${device.tablet} {
		justify-content: center;
	}

	@media ${device.desktop} {
		justify-content: flex-start;
	}
`;

const StyledContactInfo = styled.div`
	display: flex;

	div {
		width: 60%;
		margin: 1em 1em;

		@media ${device.desktop} {
			width: 100%;
			margin: 1em 2em;
		}
	}

	p,
	h3 {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.white};
		margin: 1em 0em;
	}

	p:last-child {
		font-weight: bold;
	}
`;

const Contact = () => (
	<StyledContact>
		<Spacer />
		<SectionHeader
			title="Contact"
			paragraph="If you have any question please feel free to contact me !"
		/>
		<Wrapper>
			<StyledContactInfoWrapper
				initial={{ x: -300 }}
				animate={{
					x: 0,
				}}
				transition={{ duration: 1.5 }}
			>
				<StyledContactInfo>
					<EmailLogo />
					<div>
						<h3>Would you like to write me a message?</h3>
						<p>Use my email address:</p>
						<p>dominik.buszewski@gmail.com</p>
					</div>
				</StyledContactInfo>
				<StyledContactInfo>
					<LinkedinLogo />
					<div>
						<h3>Would you like to see my work experience?</h3>
						<p>Check my Linkedin:</p>
						<p>https://www.linkedin.com/in/dominik-buszewski-4697171a4/</p>
					</div>
				</StyledContactInfo>
				<StyledContactInfo>
					<GithubLogo />
					<div>
						<h3>Would you like to see my code?</h3>
						<p>Check my github:</p>
						<p>https://github.com/DominikBuszewski</p>
					</div>
				</StyledContactInfo>
			</StyledContactInfoWrapper>
			<StyledContactForm>
				<form>
					<label htmlFor="">Name</label>
					<input type="text" required />
					<label htmlFor="">Email</label>
					<input type="email" required />
					<label htmlFor="">Message</label>
					<textarea rows={8} />
					<button>Submit</button>
				</form>
			</StyledContactForm>
		</Wrapper>
	</StyledContact>
);

export default Contact;
