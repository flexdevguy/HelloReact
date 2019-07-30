import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Flex',
      gettingStarted:'Getting Started with Flex Layout..'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          {this.state.gettingStarted + ` ${this.state.name}`}
        </p>
        <div class="flex-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>

        <div class="flex-center-container">
          <button type="button">Click Me</button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
