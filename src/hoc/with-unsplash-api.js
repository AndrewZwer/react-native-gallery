import React from "react";

import { UnsplashAPIConsumer } from "../unsplash-api-context";

const withUnsplashAPI = () => (Component) => {
	return ( props ) => {
		return(
			<UnsplashAPIConsumer>
				{
					(UnsplashAPIservice) => {
						return <Component {...props} UnsplashAPIservice={UnsplashAPIservice} />
					}
				}
			</UnsplashAPIConsumer>
		)
	}
};

export default withUnsplashAPI;