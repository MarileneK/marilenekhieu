import React from 'react';

export default function Description() {
    return (
        <div id='description'>
            <h1>Hey, I am [Marilène]!</h1>
            <img
                className='pic'
                src={require('../../assets/img/marilene-picture-b&w.png')}
                alt="Oh ho... Something went wrong =( ..."
                title="It's me! Marilène Khieu."
            />

            <p>Life is short, so... enjoy!</p>
        </div>
    )
};