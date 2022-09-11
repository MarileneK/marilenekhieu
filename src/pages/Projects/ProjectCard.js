import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className='project_card'>
      <a
        href={project.link}
        target='_blank'
        rel="noreferrer"
      >
        <img
          src={require(`../../assets/img/${project.image}`)}
          alt='Screenshot of the project'
          className='screenshot'
        />
        <h1>{project.title.toUpperCase()}</h1>
      </a>

      <p>{project.description}</p>

      <p >
        {project.link && (
          <>
            <span className="project_links">
              <a
                href={project.link}
                target='_blank'
                rel="noreferrer"
              >
                Site
              </a>
            </span>
            {' | '}
          </>
        )}
        {project.github && (
          <span className="project_links">
            <a
              href={project.github}
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
