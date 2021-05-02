import React from 'react';
import Dropdown from '../components/Dropdown';
import ProjectCategory from '../components/ProjectCategory';

const Projects = () => {
    return (
        <div>
            <Dropdown color='white' />
            <ProjectCategory title='most popular' info='these are popular charities'/>
            <ProjectCategory title='most recent' info='these are recent charities' />            
        </div>
    )
}

export default Projects;
