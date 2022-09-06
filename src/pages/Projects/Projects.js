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

            <div id='project_container'>
                {projects.map((project) => (
                    <div key={project.id} className='project_card'>
                        <img
                            src={require(`../../assets/img/${project.image}`)}
                            alt='Screenshot of the project'
                            className='screenshot'
                        />
                        <h1>{project.title}</h1>
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

                    </div>
                ))}
            </div>

        </div>
    )
}