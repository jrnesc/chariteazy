import React from 'react'

const VoteProgressBar = (props) => {
    const { completed } = props;

    const insideBarStyle = {
        width: `${completed}%`,
    }

    return (
        <div className="flex items-center bg-yellow-400 rounded-full m-5 mx-auto w-4/5">
            <div
                className="h-full bg-indigo-600 rounded-full text-right py-5 px-7 "
                style={insideBarStyle}
            >
                <span className="text-white font-bold">
                    {`${completed}%`}
                </span>
            </div>
        </div>
    )
}

export default VoteProgressBar
