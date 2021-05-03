import React from 'react'

const VoteProgressBar = (props) => {
    const { completed } = props;

    const insideBarStyle = {
        width: `${completed}%`,
    }

    return (
        <div class="bg-yellow-400 rounded-full m-5 mx-auto">
            <div
                class="h-full bg-indigo-600 rounded-full text-right py-5 px-7 relative"
                style={insideBarStyle}
            >
                <span class="text-white font-bold">
                    {`${completed}%`}
                </span>
            </div>
        </div>
    )
}

export default VoteProgressBar
