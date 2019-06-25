import React from 'react';
import "./Icon.css"

const Icon = props => (
  <section id={props.id} value={props.id} onClick={() =>
  props.clickedPlayer(props.id)
  }>
    <article>
      <img src={props.image} className="db" alt="game-char" />
    </article>
  </section>
)

export default Icon;