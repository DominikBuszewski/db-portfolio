import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/section-header/section-header";
import ProjectItem from "../components/projectItem/projectItem";

const StyledProjectsPage = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: ${({ theme }) => theme.third};
	position: relative;
`;

const StyledProjectContainer = styled.div`
	background-color: ${({ theme }) => theme.third};
`;

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.third};
	position: absolute;
	top: 10vh;
	width: 100%;
	left: 0;
`;

const Projects = () => (
	<StyledProjectsPage>
		<Wrapper>
			<SectionHeader
				title={"Projects"}
				paragraph={
					"All of my projects are made with React. They are available on GitHub and hosted on Heroku, which means that it could take some time to wake them up on the first load"
				}
			/>
			<StyledProjectContainer>
				<ProjectItem />
			</StyledProjectContainer>
		</Wrapper>
	</StyledProjectsPage>
);

export default Projects;
