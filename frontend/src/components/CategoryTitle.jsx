import React from 'react'

const CategoryTitle = ({categoryTitle, info}) => {
    return (
        <div>
            <h1>{categoryTitle}</h1>
            <h4>{info}</h4>
        </div>
    )
}

export default CategoryTitle
