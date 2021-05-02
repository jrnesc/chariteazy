import React from 'react';
import Dropdown from '../components/Dropdown';
import CategoryTitle from '../components/CategoryTitle';
import ProjectCategory from '../components/ProjectCategory';


const ProjectsCategory = () => {
    return (
        <div>
            <Dropdown color='white' />
            <CategoryTitle categoryTitle='what is selected from the dropdown' info='some info on charities selected from dropdown' />
            <ProjectCategory />
        </div>
    )
}

export default ProjectsCategory;
