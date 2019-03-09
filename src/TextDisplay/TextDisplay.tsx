import * as React from 'react';
import { PartialLookup } from '../types';

export interface TextDisplayProps {
	characterDesigns: PartialLookup<string>;
	text: string;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => (
	<div>
		<p>{text}</p>
	</div>
);