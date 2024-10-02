import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBackButton from '../components/Buttons/ArrowBackButton';

export default function About() {
  return (
    <div className="page_container_narrow about_description">
      <ArrowBackButton />

      <h1 className="main_title">Hey there, I am Marilène.</h1>

      <Link to="/contact">
        <img
          className="pic"
          src={require('../assets/img/marilene-picture-color.webp')}
          alt="Oh ho... Something went wrong =( ..."
          title="It's me! Marilène Khieu."
        />
      </Link>

      <p>I am French (36 y.o.) and I live in Paris.</p>
      <p>
        Hard to introduce myself just within a few sentences... but I would say
        that I love to laugh (haha), to eat healthy food, to do some sports
        (bouldering and cycling are filling my days), I really enjoy being in
        the nature and... I am a simple person!
      </p>
      <p>
        In my work life as well as in my personal life, I strongly need{' '}
        <strong>a sense of purpose</strong>. I need to{' '}
        <strong>be useful</strong> and to know that what I am doing makes an
        impact. On top of that, I need to <strong>be myself</strong>: honest,
        attentive and thorough with a keen eye for detail.
      </p>

      <p>
        My values: <strong>Empathy</strong> - <strong>Team player</strong> -{' '}
        <strong>Tolerance</strong>.
      </p>
    </div>
  );
}
