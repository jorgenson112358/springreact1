import React, { useState, useEffect } from 'react';
import { getBooks } from '../services/services.js';

export default function Books() {
	let [ books, setBooks ] = useState([]);

	useEffect(() => {
		getBooks().then((data) => {
			setBooks(data);
		});
	}, []);

	return (
		<div>
			<h2>Books</h2>
			<ul>
			{books.map((book) => {
				return (
					<li>{book.title} by {book.author}</li>
				)
			})}
			</ul>
		</div>
	);
}
