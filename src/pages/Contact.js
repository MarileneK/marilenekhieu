import React from 'react';
import ArrowBackButton from '../components/Buttons/ArrowBackButton';
import { EMAIL_ICON, LINKEDIN_ICON } from '../data/constants';

export default function Contact() {
  return (
    <div className='page_container_narrow contact_style'>

      <ArrowBackButton />
      <h1 className='main_title'>Let's keep in touch =)</h1>

      <div className='network'>
        <a
          href='mailto:khieu.marilene@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <i className={EMAIL_ICON}/>
        </a>
        <a
          href='https://www.linkedin.com/in/marilenekhieu'
          target='_blank'
          rel='noreferrer'
        >
          <i className={LINKEDIN_ICON}/>
        </a>
      </div>

    </div>
  )
}
