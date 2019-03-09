import * as React from 'react';
import { createContext } from 'vm';

export interface CharacterDesignerProps {
	previousDesign: string | undefined;
	onSave(design: string): any;
}

export class CharacterDesigner extends React.Component<CharacterDesignerProps> {
	private canvasRef: React.RefObject<HTMLCanvasElement>;
	private isDrawing: boolean;

	constructor(props: CharacterDesignerProps) {
		super(props);

		this.canvasRef = React.createRef();
		this.isDrawing = false;
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onClear = this.onClear.bind(this);
	}

	render() {
		const { onSave } = this.props;
		return (
			<div>
				<canvas
					ref={this.canvasRef}
					width="200"
					height="200"
					onMouseDown={this.onMouseDown}
					onMouseMove={this.onMouseMove}
					onMouseUp={this.onMouseUp}></canvas>
				<button onClick={this.onSave}>Save</button>
				<button onClick={this.onClear}>Clear</button>
			</div>
		);
	}

	private onMouseDown(ev: React.MouseEvent<HTMLCanvasElement>) {
		this.isDrawing = true;

		const ctx = (ev.target as HTMLCanvasElement).getContext('2d');
		if (ctx === null) {
			return;
		}

		const { x, y } = getMousePos(ev);
		ctx.strokeStyle = '#000';
		ctx.beginPath();
		ctx.moveTo(x, y);
	}

	private onMouseMove(ev: React.MouseEvent<HTMLCanvasElement>) {
		if (!this.isDrawing) {
			return;
		}

		const { x, y } = getMousePos(ev);
		const ctx = (ev.target as HTMLCanvasElement).getContext('2d');
		if (ctx === null) {
			return;
		}

		ctx.lineTo(x, y);
		ctx.stroke();
	}

	private onMouseUp(ev: React.MouseEvent<HTMLCanvasElement>) {
		this.isDrawing = false;

		const ctx = (ev.target as HTMLCanvasElement).getContext('2d');
		if (ctx === null) {
			return;
		}
		ctx.closePath();
	}

	private onSave() {
		if (this.canvasRef.current === null) {
			return;
		}
		this.props.onSave(this.canvasRef.current.toDataURL());
	}

	private onClear() {
		const canvas = this.canvasRef.current;
		if (canvas === null) {
			return;
		}

		const ctx = canvas.getContext('2d');
		if (ctx === null) {
			return;
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}

function getMousePos(ev: React.MouseEvent<HTMLCanvasElement>) {
	const canvas = ev.target as HTMLCanvasElement;
	const rect = canvas.getBoundingClientRect();
	return {
		x: ev.clientX - rect.left,
		y: ev.clientY - rect.top,
	};
}
