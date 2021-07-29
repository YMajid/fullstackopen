import React, { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{
			name: "Yousif Majid",
			number: "123-456-7890",
		},
	]);
	const [newName, setNewName] = useState("Your Name");
	const [newNumber, setNewNumber] = useState("000-000-0000");
	const [newSearch, setNewSearch] = useState("");

	const handleNewName = (event) => {
		event.preventDefault();
		setNewName(event.target.value);
		console.log(event.target.value);
	};
	const handleNewNumber = (event) => {
		event.preventDefault();
		setNewNumber(event.target.value);
	};
	const handleNewSearch = (event) => {
		event.preventDefault();
		setNewSearch(event.target.value);
	};

	const addNewPerson = (event) => {
		event.preventDefault();

		if (persons.filter((person) => person.name === newName).length > 0) {
			alert(`${newName} is already added to the phonebook.`);
			return;
		}

		const newPerson = {
			name: newName,
			number: newNumber,
		};
		setPersons(persons.concat(newPerson));
	};

	const personsToShow =
		newSearch === ""
			? persons
			: persons.filter((person) =>
					person.name
						.toLowerCase()
						.startsWith(newSearch.toLowerCase())
			  );

	return (
		<div>
			<h1>Phonebook</h1>
			<h2>Search</h2>
			<form>
				name:
				<input value={newSearch} onChange={handleNewSearch} />
			</form>
			<h2>Add new number</h2>
			<form onSubmit={addNewPerson}>
				<div>
					name:
					<input value={newName} onChange={handleNewName} />
				</div>
				<div>
					number:
					<input value={newNumber} onChange={handleNewNumber} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Persons</h2>
			<ul>
				{personsToShow.map((person, idx) => (
					<li key={idx}>
						{person.name}: {person.number}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
