import * as React from 'react';
import { Character } from '../Character';
import './Alphabet.css';

import { PartialLookup } from '../types';

export interface AlphabetProps {
	activeCharacter: string;
	characterDesigns: PartialLookup<string>;
	setActiveCharacter(character: string): void;
}

// Displays all of the characters in the character set
export const Alphabet: React.FC<AlphabetProps> = ({ activeCharacter, characterDesigns, setActiveCharacter }) => {
	const characters = [];
	for (let i = 0; i < 26; i++) {
		const c = String.fromCharCode(65 + i);
		const design = characterDesigns[c] || '';
		characters.push(<Character 
			key={c} 
			character={c} 
			design={design} 
			onClick={setActiveCharacter}
			isActive={c === activeCharacter} />);
	}
	return (
		<div className="Alphabet">
			{characters}
		</div>
	);
};