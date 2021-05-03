import React from 'react';

const CategoryTitle = ({categoryTitle, categorySubtitle}) => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">{categoryTitle}</h2>
                <p className="text-xl mt-4 text-gray-400">{categorySubtitle}</p>
            </div>
        </div>
    )
}

export default CategoryTitle;
