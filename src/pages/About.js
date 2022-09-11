import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBackButton from '../components/Buttons/ArrowBackButton';

export default function About() {
  return (
    <div className='page_container_narrow about_description'>
      <ArrowBackButton />

      <h1 className='main_title'>Hey there, I am Marilène.</h1>

      <Link to='/contact'>
      <img
        className='pic'
        src={require('../assets/img/marilene-picture-color.png')}
        alt="Oh ho... Something went wrong =( ..."
        title="It's me! Marilène Khieu."
      />
      </Link>

      <p>I am French, I live in the suburbs of Paris and I am 34 years old.</p>
      <p>In my work life as well as in my personal life, I strongly need a sense of purpose. I need to <strong>be useful</strong> and to know that what I am doing makes an impact. On top of that, I need to <strong>be myself</strong>: honest, attentive and thorough with a keen eye for detail.</p>
      <p>After 6 years at Sales/Customer Success Manager positions, I decided to choose a path aligned with my values and my personality. In march 2021, I decided to take a new step into my professional life and to become <strong>a web developer</strong>.</p>

    </div>
  )
}
