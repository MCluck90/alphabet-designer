import * as React from 'react';
import './Character.css';

export interface CharacterProps {
	character: string;
	design: string;
	isActive: boolean;
	onClick(character: string): any;
}

/**
 * Displays a single key and allows one to design the key
 */
export const Character: React.FC<CharacterProps> = ({ character, design, isActive, onClick }) => {
	let className = "Character";
	if (isActive) {
		className = `${className} active`;
	}
	return (
		<div className={className} onClick={() => onClick(character)}>
			<img src={design} alt={character} />
			<p>{character}</p>
		</div>
	);
};