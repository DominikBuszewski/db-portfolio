import React, { Fragment } from "react";
import GlobalStyle from "./styles/global-styles.styles";
import HomePage from "./pages//home";

const App: React.FC = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<HomePage />
		</Fragment>
	);
};

export default App;
