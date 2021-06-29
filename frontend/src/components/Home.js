import React, { Component } from 'react';
import '../App.css';
import AppMenu from '../AppMenu.js';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default class Home extends Component {
	render() {
		return (
			<div>
				<AppMenu />
				<Container fluid>
					<button color="link"><Link to="/lotr">Lord of the Rings</Link></button>
					<button color="link"><Link to="/musketeers">Musketeers</Link></button>
				</Container>
			</div>
		);
	}
}