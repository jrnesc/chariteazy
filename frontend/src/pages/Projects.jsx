import React from 'react';
import CategoryTitle from '../components/CategoryTitle';
import Dropdown from '../components/Dropdown';
import TopProjectCategory from '../components/TopProjectCategory';

const Projects = () => {
    return (
        <div>
            <Dropdown color='white' />
            <CategoryTitle categoryTitle='Categories' info='Please select categories from dropdown' />
            <TopProjectCategory title='most popular' />
            <TopProjectCategory title='most recent' />            
        </div>
    )
}

export default Projects;
