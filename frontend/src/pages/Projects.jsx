import React from 'react';
import CategoryTitle from '../components/CategoryTitle';
import CauseCard from '../components/CauseCard';
import Dropdown from '../components/Dropdown';
import TopProjectCategory from '../components/TopProjectCategory';

const Projects = () => {
    return (
        <div>
            <Dropdown color='white' />
            <CategoryTitle categoryTitle="Categories" categorySubtitle="Please Select a category from the dropdown" />
            <TopProjectCategory title='most popular' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
               <CauseCard />
               <CauseCard />
               <CauseCard /> 
            </div>
            <TopProjectCategory title='most recent' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
               <CauseCard />
               <CauseCard />
               <CauseCard /> 
            </div>            
        </div>
    )
}

export default Projects;
