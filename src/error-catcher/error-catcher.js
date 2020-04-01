import React, { Component } from "react";

import Error from "../error";

export default class ErrorCatcher extends Component {
	state = {
		gotError: false
	}

	static getDerivedStateFromError(error) {
	    this.setState({gotError: true});
  	}

	render() {
		if(this.state.gotError){
			return <Error />;
		}
		return this.props.children;
	}
};