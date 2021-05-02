import React from 'react'

const ProjectCategory = ({title, info}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{info}</h4>
            {/* <div>
                here i want to map through the projects in the particular category.
            </div> */}
        </div>
    )
}

export default ProjectCategory
