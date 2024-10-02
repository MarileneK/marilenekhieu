import React from 'react';
import { Link } from 'react-router-dom';

export default function Description() {
  return (
    <div id="description">
      <h1>
        Hey, I am{' '}
        <Link to="/contact" className="link_style">
          Marilène Khieu.
        </Link>
      </h1>
      <Link to="/about">
        <img
          className="pic"
          src={require('../assets/img/marilene-picture-b&w.webp')}
          alt="Oh ho... Something went wrong =( ..."
          title="It's me! Marilène Khieu."
        />
      </Link>
    </div>
  );
}
