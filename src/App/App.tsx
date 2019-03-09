import * as React from 'react';
import { Alphabet } from '../Alphabet';
import { CharacterDesigner } from '../CharacterDesigner';
import { TextDisplay } from '../TextDisplay';

import { PartialLookup } from '../types';
import './App.css';

interface AppState {
  activeCharacter: string;
  characterDesigns: PartialLookup<string>;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.setActiveCharacter = this.setActiveCharacter.bind(this);

    this.state = {
      activeCharacter: '',
      characterDesigns: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Alphabet
          activeCharacter={this.state.activeCharacter}
          characterDesigns={this.state.characterDesigns}
          setActiveCharacter={this.setActiveCharacter} />
        <CharacterDesigner character={this.state.activeCharacter} />
        <TextDisplay text="Hello world" characterDesigns={this.state.characterDesigns} />
      </div>
    );
  }

  private setActiveCharacter(character: string) {
    this.setState({ activeCharacter: character });
  }
}
