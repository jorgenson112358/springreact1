import React from 'react';
import { getMusketeers } from '../services/services.js';

export default class Musketeers extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		getMusketeers().then(response => {
			this.setState({ data: response });
		})
	}

	render() {
		return (
			<div>
				<h1>The Three Musketeers!</h1>
				{this.state.data.map(name => {
					return <p>{name}</p>
				})}
			</div>
		);
	}
}