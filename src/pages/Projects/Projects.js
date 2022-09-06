import React from 'react';
import './Projects.css';

import '../../components/Buttons/Buttons.css';
import { projects } from '../../data/projectsData';
import ArrowBackButton from '../../components/Buttons/ArrowBackButton';


export default function Projects() {
    const technos = projects.map((project) => project.technos);

    return (
        <div>
            <ArrowBackButton />

            <p style={{ fontSize: '50px', color: 'red' }}>ALL | WEB | MOBILE (ajouter un hover + selected)</p>

            {projects.map((project) => (
                <React.Fragment key={project.id}>
                    <h1>{project.title}</h1>
                    <img
                        // src={require(`../../assets/img/${project.image}`)}
                        src={require(`../../assets/img/${project.image}`)}
                        alt='Screenshot of the project'
                        className='screenshot'
                    />
                    <p>{project.description}</p>

                    <p>
                        {project.link && (
                            <>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Site
                                </a>
                                {' | '}
                            </>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        )}
                    </p>

                </React.Fragment>
            ))}

        </div>
    )
}