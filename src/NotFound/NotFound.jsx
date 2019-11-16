import React, { Component } from 'react';
import './NotFound.scss';
import jez404 from '../img/404jez.jpg';

const NotFound = () => {
  return (
    <section className="NotFound">
      <h2>Shhhh...don't wake her</h2>
      <h4>Please find another page</h4>
      <img src={jez404} alt="" className="jez404" />
    </section>
  );
};

export default NotFound;
