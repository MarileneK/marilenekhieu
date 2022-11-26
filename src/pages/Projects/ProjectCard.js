import React from 'react';

export default function ProjectCard({ project }) {

  const { description, github, image, link, title } = project;

  return (
    <div className='project_card'>
      {link ? (
        <a
          href={link}
          target='_blank'
          rel="noreferrer"
        >
          <img
            src={require(`../../assets/img/${image}`)}
            alt='Screenshot of the project'
            className='screenshot'
          />
          <h1>{title.toUpperCase()}</h1>
        </a>
      ) : (
        <>
          <img
            src={require(`../../assets/img/${image}`)}
            alt='Screenshot of the project'
            className='screenshot'
          />
          <h1>{title.toUpperCase()}</h1>
        </>
      )}


      <p>{description}</p>

      <p>
        {link ? (
          <>
            <span className="project_links">
              <a
                href={link}
                target='_blank'
                rel="noreferrer"
              >
                Site
              </a>
            </span>
            {' | '}
          </>
        ) : ""
        }
        {github && (
          <span className="project_links">
            <a
              href={github}
              target='_blank'
              rel="noreferrer"
            >
              GitHub
            </a>
          </span>
        )}
      </p>

    </div>
  )
}
