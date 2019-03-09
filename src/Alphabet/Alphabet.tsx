import * as React from 'react';
import { Character } from '../Character';
import './Alphabet.css';

import { PartialLookup } from '../types';

export interface AlphabetProps {
	characterDesigns: PartialLookup<string>;
}

// Displays all of the characters in the character set
export const Alphabet: React.FC<AlphabetProps> = ({ characterDesigns }) => {
	const characters = [];
	for (let i = 0; i < 26; i++) {
		const c = String.fromCharCode(65 + i);
		const design = characterDesigns[c] || '';
		characters.push(<Character key={c} character={c} design={design} />);
	}
	return (
		<div className="Alphabet">
			{characters}
		</div>
	);
};