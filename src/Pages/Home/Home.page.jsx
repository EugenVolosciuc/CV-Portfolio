import React from "react";
import "./Home.style.css";

import { MatchMediaHOC } from "react-match-media";
import CategoryList from "../../components/CategoryList/CategoryList.component";
import Introduction from "../../components/Introduction/Introduction.component";

const CategoryListMobile = MatchMediaHOC(CategoryList, "(max-width: 599px)");
const IntroductionMobile = MatchMediaHOC(Introduction, "(max-width: 599px)");
const CategoryListDesktop = MatchMediaHOC(CategoryList, "(min-width: 599px)");
const IntroductionDesktop = MatchMediaHOC(Introduction, "(min-width: 599px)");

function Home(props) {
  return (
    <div className="Home">
      <IntroductionMobile />
      <CategoryListMobile categories={props.categories} />
      <CategoryListDesktop categories={props.categories} />
      <IntroductionDesktop />
    </div>
  );
}

export default Home;
