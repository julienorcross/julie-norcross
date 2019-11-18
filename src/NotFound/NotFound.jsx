import React from 'react';
import './NotFound.scss';
import jez404 from '../img/404jez.jpg';

const NotFound = () => (
  <section className="not-found">
    <h2>Shhhh...don't wake her</h2>
    <h4>Please find another page</h4>
    <img src={jez404} alt="" className="jez-404" />
  </section>
);

export default NotFound;
