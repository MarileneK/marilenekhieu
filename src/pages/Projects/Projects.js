import React, { useState } from 'react';
import './Projects.css';
import '../../components/Buttons/Buttons.css';

import ArrowBackButton from '../../components/Buttons/ArrowBackButton';
import ProjectCard from './ProjectCard';

import projectsData from '../../data/projectsData';
import { ALL, MOBILE, WEB } from '../../data/constants';

export default function Projects() {
    const [projects, setProjects] = useState(projectsData);

    const handleClick = (currentCat) => {
        setProjects(projectsData);
        const singleProject = projectsData.map((project) => project);
        const result = singleProject.filter((cat) => cat.category === currentCat);
        setProjects(result);
    };

    return (
        <div className='page_container'>
            <ArrowBackButton />

            <div className='main_title categories_style'>
                <span onClick={() => setProjects(projectsData)}>{ALL}</span>|
                <span onClick={() => handleClick(WEB)}>{WEB}</span>|
                <span onClick={() => handleClick(MOBILE)}>{MOBILE}</span>
            </div>

            <div id='project_container'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

        </div>
    )
}