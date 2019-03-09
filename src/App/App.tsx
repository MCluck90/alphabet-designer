import * as React from 'react';
import { Alphabet } from '../Alphabet';
import { CharacterDesigner } from '../CharacterDesigner';
import { TextDisplay } from '../TextDisplay';

import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Alphabet />
        <CharacterDesigner />
        <TextDisplay text="Hello world" />
      </div>
    );
  }
}
