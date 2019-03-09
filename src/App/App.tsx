import * as React from 'react';
import { Alphabet } from '../Alphabet';
import { CharacterDesigner } from '../CharacterDesigner';
import { TextDisplay } from '../TextDisplay';

import { PartialLookup } from '../types';
import './App.css';

interface AppState {
  activeCharacter: string;
  characterDesigns: PartialLookup<string>;
  text: string;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.setActiveCharacter = this.setActiveCharacter.bind(this);
    this.updateDesign = this.updateDesign.bind(this);
    this.onInput = this.onInput.bind(this);

    this.state = {
      activeCharacter: '',
      characterDesigns: {},
      text: 'Hello world',
    };
  }

  render() {
    const previousDesign = this.state.characterDesigns[this.state.activeCharacter];
    return (
      <div className="App">
        <Alphabet
          activeCharacter={this.state.activeCharacter}
          characterDesigns={this.state.characterDesigns}
          setActiveCharacter={this.setActiveCharacter} />
        <CharacterDesigner previousDesign={previousDesign} onSave={this.updateDesign} />
        <input type="text" onInput={this.onInput} />
        <TextDisplay text={this.state.text} characterDesigns={this.state.characterDesigns} />
      </div>
    );
  }

  private setActiveCharacter(character: string) {
    this.setState({ activeCharacter: character });
  }

  private updateDesign(design: string) {
    this.setState({
      characterDesigns: {
        ...this.state.characterDesigns,
        [this.state.activeCharacter]: design,
      }
    });
  }

  private onInput(ev: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: ev.currentTarget.value });
  }
}
