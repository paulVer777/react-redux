import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter'
import store from './Store/store'


class App extends Component {
  render() {
    return (
        <div>

            <Counter store={store}/>

        </div>
    );
  }
}

export default App;
