import React from "react";
import styled from "styled-components";
import { device } from "../../styles/main-styles.styles";

type SectionType = {
	title: String;
	paragraph: String;
};

const StyledWrapper = styled.div`
	width: 80%;
	margin: 0 auto;

	@media ${device.tablet} {
		width: 50%;
		margin: 0 0;
	}
	h1,
	p {
		width: 90%;
		color: ${({ theme }) => theme.white};
		margin: 0.3em auto;
		text-align: center;

		@media ${device.tablet} {
			width: 60%;
			text-align: left;
		}
	}

	h1 {
		color: ${({ theme }) => theme.secondary};
		border-bottom: 3px solid ${({ theme }) => theme.white};
		@media ${device.tablet} {
			font-size: 3rem;
		}
	}

	p {
		@media ${device.tablet} {
			font-size: 1.4rem;
		}
	}
`;

const SectionHeader: React.FC<SectionType> = ({ title, paragraph }) => {
	return (
		<StyledWrapper>
			<h1>{title}</h1>
			<p>{paragraph}</p>
		</StyledWrapper>
	);
};

export default SectionHeader;
