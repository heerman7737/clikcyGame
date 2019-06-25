import React from 'react';
import "./Banner.css"

const Banner = props => (
  <article>
    <p>{props.status} | Score: {props.currentScore} | Top Score: {props.topScore}</p>
  </article>
);
export default Banner;