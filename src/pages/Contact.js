import React from 'react';
import { EMAIL, INSTAGRAM, LINKEDIN, LINKEDIN_ICON } from '../data/constants';

export default function Contact() {
  return (
    <React.Fragment>

      <p>[Button BACK]</p>
      <p>Hey! Let's keep in touch!</p>

      <a
        href={`mailto:${EMAIL}`}
        target='_blank'
        rel="noreferrer"
      >
        khieu.marilene@gmail.com
      </a>
      <a
        href={`${LINKEDIN}`}
        target='_blank'
        rel="noreferrer"
      >
        <i className={LINKEDIN_ICON} />{' '}
      </a>
      <a
        href={`${INSTAGRAM}`}
        target='_blank'
        rel="noreferrer"
      >
        Instagram: marileneK (add link)
      </a>

    </React.Fragment>
  )
}
