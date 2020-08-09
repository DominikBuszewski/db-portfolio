import React from "react";
import styled from "styled-components";
import { Firebase } from "@styled-icons/simple-icons/Firebase";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { device } from "../../styles/main-styles.styles";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Stripe } from "@styled-icons/fa-brands/Stripe";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Greensock } from "@styled-icons/simple-icons/Greensock";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { Reactrouter } from "@styled-icons/simple-icons/Reactrouter";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";

const MongodbLogo = styled(Mongodb)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;

const FirebaseLogo = styled(Firebase)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const HtmlLogo = styled(Html5)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const CssLoogo = styled(Css3)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const SassLogo = styled(Sass)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const JavaScriptLogo = styled(Javascript)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const TypeScriptLogo = styled(Typescript)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const ReactLogoo = styled(ReactLogo)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const NodejsLogo = styled(Nodejs)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const GraphqlLogo = styled(Graphql)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const StripeLogo = styled(Stripe)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const GreensockLogo = styled(Greensock)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const StyledComponentsLogo = styled(StyledComponents)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const ReactRouterLogo = styled(Reactrouter)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;
const ReduxLogo = styled(Redux)`
	width: 3rem;
	color: ${({ theme }) => theme.sixth};
`;

const StyledIconWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	width: 80%;
	background-color: ${({ theme }) => theme.fifth};

	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
		width: 60%;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		padding: 0.5em;

		@media ${device.tablet} {
			width: 100%;
		}

		h4 {
			width: 50%;
			text-align: center;

			color: ${({ theme }) => theme.white};
			font-size: 0.8rem;

			@media ${device.tablet} {
				font-size: 1rem;
			}

			@media ${device.desktop} {
				font-size: 1.2rem;
				text-align: right;
			}
		}

		i {
			width: 6rem;
		}
	}
`;

const TechnologyIconWrapper: React.FC = () => (
	<StyledIconWrapper>
		<div>
			<HtmlLogo />
			<h4>HTML</h4>
		</div>
		<div>
			<CssLoogo />
			<h4>CSS</h4>
		</div>
		<div>
			<SassLogo />
			<h4>Sass</h4>
		</div>
		<div>
			<StyledComponentsLogo />
			<h4>Styled-Compomnents</h4>
		</div>
		<div>
			<JavaScriptLogo />
			<h4>JavaScript</h4>
		</div>
		<div>
			<TypeScriptLogo />
			<h4>Typescript</h4>
		</div>
		<div>
			<ReactLogoo />
			<h4>React & Hooks</h4>
		</div>
		<div>
			<ReduxLogo />
			<h4>Redux</h4>
		</div>
		<div>
			<ReactRouterLogo />
			<h4>React router</h4>
		</div>
		<div>
			<NodejsLogo />
			<h4>Node.js</h4>
		</div>
		<div>
			<MongodbLogo />
			<h4>MongoDB</h4>
		</div>
		<div>
			<FirebaseLogo />
			<h4>Firebase</h4>
		</div>
		<div>
			<GraphqlLogo />
			<h4>GraphQl</h4>
		</div>
		<div>
			<StripeLogo />
			<h4>Stripe</h4>
		</div>
		<div>
			<GreensockLogo />
			<h4>GSAP</h4>
		</div>
	</StyledIconWrapper>
);

export default TechnologyIconWrapper;
