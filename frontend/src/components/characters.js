import React from 'react';
import { getCharacters } from '../services/services.js';

export default class Characters extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		getCharacters().then(response => {
			this.setState({ data: response });
		})
	}

	render() {
		return (
			<div>
				<h1>Lord of the Rings characters</h1>
				{this.state.data.map(character => {
					return <p>{character.name} the {character.race} {character.charClass}</p>
				})}
			</div>
		);
	}
}