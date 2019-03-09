import * as React from 'react';
import './Character.css';

export interface CharacterProps {
	character: string;
	design: string;
}

/**
 * Displays a single key and allows one to design the key
 */
export const Character: React.FC<CharacterProps> = ({ character, design }) => (
	<div className="Character">
		<img src={design} alt={character} />
		<p>{character}</p>
	</div>
);