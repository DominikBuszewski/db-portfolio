import React, { Fragment } from "react";
import GlobalStyle from "./styles/global-styles.styles";
import Header from "./components/header/header.component";
import HomePage from "./pages/Home";

const App: React.FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<HomePage />
		</Fragment>
	);
};

export default App;
