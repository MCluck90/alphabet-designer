import * as React from 'react';
import { Alphabet } from '../Alphabet';
import { CharacterDesigner } from '../CharacterDesigner';
import { TextDisplay } from '../TextDisplay';

import { PartialLookup } from '../types';
import './App.css';

interface AppState {
  characterDesigns: PartialLookup<string>;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      characterDesigns: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Alphabet characterDesigns={this.state.characterDesigns} />
        <CharacterDesigner />
        <TextDisplay text="Hello world" />
      </div>
    );
  }
}
