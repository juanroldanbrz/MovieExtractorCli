import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './component/Header.js';
import DomainManagerComponent from './component/DomainManager.js';

class App extends Component {
  render() {
      return <div className="App container">
          <div className="row">
              <HeaderComponent/>
          </div>
          <DomainManagerComponent/>

      </div>

  }

}

export default App;
