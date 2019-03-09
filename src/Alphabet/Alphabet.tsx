import * as React from 'react';
import { Character } from '../Character';
import './Alphabet.css';

// Displays all of the characters in the character set
export const Alphabet: React.FC = () => (
	<div className="Alphabet">
		<Character character="A" />
		<Character character="B" />
		<Character character="C" />
	</div>
);