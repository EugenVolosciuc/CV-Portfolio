import React, { Component } from 'react';
import './App.css';

import projectsJSON from './assets/projects.json';
import { MatchMediaHOC } from 'react-match-media';
import CategoryList from './components/CategoryList/CategoryList.component';
import Introduction from './components/Introduction/Introduction.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: projectsJSON,
      currentCategory: null,
      social: {
        behance: {
          icon: "",
          link: ""
        },
        linkedin: {
          icon: "",
          link: ""
        },
        facebook: {
          icon: "",
          link: ""
        },
        cv: {
          icon: "",
          link: ""
        },
        mail: {
          icon: "",
          link: ""
        },
      }
    }
  }
  render() {
    return (
      <div className="App" >
        <CategoryList categories={this.state.categories} />
        <Introduction />
      </div>
    );
  }
}

export default App;
