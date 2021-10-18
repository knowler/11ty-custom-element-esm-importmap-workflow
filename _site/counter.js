import {html, useState} from 'preact';
import sheet from './counter.css' assert { type: 'css' };

document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

export function Counter({count: initialCount = 0}) {
	const [count, setCount] = useState(() => Number(initialCount));

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return html`
		<x-counter-count>${count}</x-counter-count>
		<button type="button" onClick=${increment}>+</button>
		<button type="button" onClick=${decrement}>-</button>
	`;
}
