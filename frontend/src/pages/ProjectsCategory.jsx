import React from 'react';
import Dropdown from '../components/Dropdown';
import CategoryTitle from '../components/CategoryTitle';
import CauseCard from '../components/CauseCard';


const ProjectsCategory = () => {
    return (
        <div>
            <Dropdown color="white" />
            <div className="space-y-10">
                <CategoryTitle categoryTitle="Category selected from the dropdown" categorySubtitle="some info on category selected from dropdown" />
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

export default ProjectsCategory;
