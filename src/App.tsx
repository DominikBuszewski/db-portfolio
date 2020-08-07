import React, { Fragment } from "react";
import GlobalStyle from "./styles/global-styles.styles";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header.component";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import { theme } from "./styles/main-styles.styles";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/projects" component={Projects} />
					<Route path="/technologies" component={Technologies} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
