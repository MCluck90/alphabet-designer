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
				text.split('').map((character) => {
					if (characterDesigns[character]) {
						return (<img src={characterDesigns[character]} alt={character} />)
					} else {
						return character;
					}
				})
			}
		</p>
	</div>
);