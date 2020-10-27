import React from "react";
import GlobalStyle from "./styles/global-styles.styles";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header.component";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { theme } from "./styles/main-styles.styles";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/technologies" component={Technologies} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/aboutme" component={About} />
					</Switch>
				</main>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
