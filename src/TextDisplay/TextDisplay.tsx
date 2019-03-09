import * as React from 'react';
import { PartialLookup } from '../types';

export interface TextDisplayProps {
	characterDesigns: PartialLookup<string>;
	text: string;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({ text, characterDesigns }) => (
	<div>
		<p>
			{
				text.split('').map((character, index) => {
					if (characterDesigns[character.toUpperCase()]) {
						// Index is actually appropriate in this case
						return (<img key={index} src={characterDesigns[character.toUpperCase()]} alt={character} />)
					} else {
						return character;
					}
				})
			}
		</p>
	</div>
);