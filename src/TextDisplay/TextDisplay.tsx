import * as React from 'react';

export interface TextDisplayProps {
	text: string;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => (
	<div>
		<p>{text}</p>
	</div>
);