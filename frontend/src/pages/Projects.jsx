import React from 'react';
import CategoryTitle from '../components/CategoryTitle';
import CauseCard from '../components/CauseCard';
import Dropdown from '../components/Dropdown';
import ProjectCategory from '../components/ProjectCategory';

const Projects = () => {
    return (
        <div>
            <Dropdown />
            <div className="space-y-1">
                <div className="space-y-20">
                    <CategoryTitle categoryTitle="Categories" categorySubtitle="Please Select a category from the dropdown" />
                    <ProjectCategory title='Most Popular' />
                </div>
                <div className="space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        <CauseCard />
                        <CauseCard />
                        <CauseCard /> 
                    </div>
                
                    <ProjectCategory title='Most Recent' />
                </div>
                <div className="space-y-1"> 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        <CauseCard />
                        <CauseCard />
                        <CauseCard /> 
                    </div>
                    <ProjectCategory title='All Causes' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 gap-y-10">
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />
                    <CauseCard />  
                </div>
            </div>                       
        </div>
    )
}

export default Projects;
