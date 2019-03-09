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
    this.updateDesign = this.updateDesign.bind(this);

    this.state = {
      activeCharacter: '',
      characterDesigns: {}
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
        <TextDisplay text="Hello world" characterDesigns={this.state.characterDesigns} />
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
}
