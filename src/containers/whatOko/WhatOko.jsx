import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatOko.css';

const WhatOko = () => (
  <div className="oko_whatoko section__margin" id="woko">
    <div className="oko_whatoko-feature">
      <Feature title="Meet Oko" text="We so opinion" />
    </div>
    <div className="oko_whatoko-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="oko_whatoko-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default WhatOko;