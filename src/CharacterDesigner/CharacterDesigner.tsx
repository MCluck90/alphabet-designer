import * as React from 'react';

export interface CharacterDesignerProps {
	character: string;
}

export const CharacterDesigner: React.FC<CharacterDesignerProps> = ({ character }) => (
	<div>
		<canvas></canvas>
		<button>Save</button>
		<button>Cancel</button>
	</div>
);