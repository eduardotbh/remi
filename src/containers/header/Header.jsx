import React from 'react';
import cellphone from '../../assets/cellphone.png';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="oko_header section__padding" id="home">
    <div className="oko_header-content">
      <h1 className="gradient__text">Entrepreneurs need a different path</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="oko_header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="oko_header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="oko_header-image">
      /<img src={cellphone} />
    </div>
  </div>
);

export default Header;