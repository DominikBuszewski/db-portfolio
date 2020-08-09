import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/section-header/section-header";
import { Email } from "@styled-icons/entypo/Email";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { device } from "../styles/main-styles.styles";

const EmailLogo = styled(Email)`
	width: 3rem;
	color: ${({ theme }) => theme.white};
`;
const LinkedinLogo = styled(LinkedinSquare)`
	width: 3rem;
	color: ${({ theme }) => theme.white};
`;
const GithubLogo = styled(Github)`
	width: 3rem;
	color: ${({ theme }) => theme.white};
`;

const StyledContact = styled.div`
	min-height: 100vh;
	background-color: ${({ theme }) => theme.blue};
`;

const Spacer = styled.div`
	height: 10vh;
	width: 100%;
	background-color: ${({ theme }) => theme.blue};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 90%;
	margin: 7em auto;

	@media ${device.desktop} {
		flex-direction: row;
		width: 80%;
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
	}
`;

const StyledContactInfoWrapper = styled.div`
	width: 100%;
	height: 50vh;
`;

const StyledContactInfo = styled.div`
	display: flex;

	div {
		width: 70%;
		margin: 1em 0;
	}

	p,
	h3 {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.white};
		margin-left: 1em;
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
			<StyledContactInfoWrapper>
				<StyledContactInfo>
					<EmailLogo />
					<div>
						<h3>Would you like to write to me?</h3>
						<p>
							Use my email address: <h4>dominik.buszewski@gmai.com</h4>
						</p>
					</div>
				</StyledContactInfo>
				<StyledContactInfo>
					<LinkedinLogo />
					<div>
						<h3>Would you like to see my work experience?</h3>
						<p>
							Check my Linkedin:
							<h4>https://www.linkedin.com/in/dominik-buszewski-4697171a4/</h4>
						</p>
					</div>
				</StyledContactInfo>
				<StyledContactInfo>
					<GithubLogo />
					<div>
						<h3>Would you like to see my code?</h3>
						<p>
							Check my github: <h4>https://github.com/DominikBuszewski</h4>
						</p>
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
				</form>
			</StyledContactForm>
		</Wrapper>
	</StyledContact>
);

export default Contact;
