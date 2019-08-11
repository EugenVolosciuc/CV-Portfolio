import React, { Component } from 'react';
import './App.css';

import projectsJSON from './assets/projects.json';
import socialLinks from './assets/social.json';
import { MatchMediaHOC } from 'react-match-media';
import CategoryList from './components/CategoryList/CategoryList.component';
import Introduction from './components/Introduction/Introduction.component';

const CategoryListMobile = MatchMediaHOC(CategoryList, '(max-width: 599px)');
const IntroductionMobile = MatchMediaHOC(Introduction, '(max-width: 599px)');
const CategoryListDesktop = MatchMediaHOC(CategoryList, '(min-width: 599px)');
const IntroductionDesktop = MatchMediaHOC(Introduction, '(min-width: 599px)');

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: projectsJSON,
      currentCategory: null,
      social: socialLinks
    }
  }
  render() {
    return (
      <div className="App" >
        <IntroductionMobile />
        <CategoryListMobile categories={this.state.categories} />
        <CategoryListDesktop categories={this.state.categories} />
        <IntroductionDesktop />
      </div>
    );
  }
}

export default App;
