import React, { useState } from "react";

const Header = ({ text }) => {
	return <h1>{text}</h1>;
};

const Button = ({ clickHandler, text }) => {
	return <button onClick={clickHandler}>{text}</button>;
};

const Statistic = ({ feedback, count }) => {
	return (
		<p>
			{feedback}: {count}
		</p>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const totalReviews = good + neutral + bad;

	if (totalReviews === 0) return <p>No feedback given yet.</p>;

	const calculateAverage = () => {
		if (totalReviews === 0) return 0;
		const average = (good - bad) / totalReviews;
		return average;
	};

	const percentagePositive = () => {
		if (totalReviews === 0) return 0;
		const percentagePositive = good / totalReviews;
		return percentagePositive;
	};
	return (
		<div>
			<Statistic feedback="Good" count={good} />
			<Statistic feedback="Neutral" count={neutral} />
			<Statistic feedback="Bad" count={bad} />
			<Statistic feedback="Average" count={calculateAverage()} />
			<Statistic feedback="Positive" count={percentagePositive()} />
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGood = () => setGood(good + 1);
	const handleNeutral = () => setNeutral(neutral + 1);
	const handleBad = () => setBad(bad + 1);

	return (
		<div>
			<Header text="Give Feedback:" />
			<Button clickHandler={handleGood} text="Good" />
			<Button clickHandler={handleNeutral} text="Neutral" />
			<Button clickHandler={handleBad} text="Bad" />
			<Header text="Statistics:" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
