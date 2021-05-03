import React from 'react'
import VoteProgressBar from '../components/VoteProgressBar';
import Header from "../components/Header"

const Project = () => {

    

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item w-1/3">
            <img
                src="images/hands.png" alt="hands"
            />
        </div>,
        <div className="item w-1/3">
            <img
                src="images/hands.png" alt="hands"
            />
        </div>,
        <div className="item w-1/3">
            <img
                src="images/hands.png" alt="hands"
            />
        </div>,
        
    ];

    const testData = [
        { completed: 70 },
    ]

    return (
        <div>
            <Header />
            <h1 className="text-center p-10 text-4xl">Specific Project Name</h1>

            <div className="grid gap-4 grid-cols-3 justify-items-center box-border border-4">
                <div className="flex items-center px-2 py-5">
                    <img
                        className="w-30 h-40"
                        src="images/hands.png"
                        alt="hands"
                    />
                </div>
                <div className="flex items-center">
                    <h3 className="text-center">This is specific project specific project blah yeah blah blah blah blah blah</h3>
                </div>
            </div>

            <div className="p-10">
                <h3 className="text-center text-3xl">Vote Progress</h3>
                {testData.map((item, idx) => (
                    <VoteProgressBar
                        key={idx}
                        completed={item.completed}
                    />)
                )}
            </div>

            <div className="grid gap-4 grid-cols-2 justify-items-center box-border border-4">
                <div className="flex items-center px-2 py-5">
                    <h3>This is specific project specific project blah yeah blah blah blah blah blah</h3>
                </div>
                <div className="flex items-center px-2 py-5">
                    <img
                        className="w-30 h-40"
                        src="images/hands.png"
                        alt="hands"
                    />
                </div>

                <div className="flex items-center px-2 py-5">
                    <img 
                        className="w-30 h-40"
                        src="images/hands.png"
                        alt="hands"
                    />
                </div>
                <div className="flex items-center px-2 py-5">
                    <h3>This is specific project specific project blah yeah blah blah blah blah blah</h3>
                </div>

                <div className="flex items-center px-2 py-5">
                    <h3>This is specific project specific project blah yeah blah blah blah blah blah</h3>
                </div>
                <div className="flex items-center px-2 py-5">
                    <img className="w-30 h-40" src="images/hands.png" alt="hands" />
                </div>
            </div>

            <h3 className="text-center p-10 text-3xl">Supporters</h3>
            
        </div>
    )
}

export default Project
