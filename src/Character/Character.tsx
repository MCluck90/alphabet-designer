import * as React from 'react';
import './Character.css';

export interface CharacterProps {
	character: string;
}

/**
 * Displays a single key and allows one to design the key
 */
export const Character: React.FC<CharacterProps> = ({ character }) => (
	<div className="Character">
		<canvas></canvas>
		<p>{character}</p>
	</div>
);