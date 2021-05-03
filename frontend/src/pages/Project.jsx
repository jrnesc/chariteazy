import React from 'react'
import VoteProgressBar from '../components/VoteProgressBar';
import HorizontalCardList from "../components/HorizontalCardList"
import CauseCard from '../components/CauseCard';

const Project = () => {

    const testData = [
        { completed: 0 },
    ]

    const cards = [
        <CauseCard />,
        <CauseCard />,
        <CauseCard />,
        <CauseCard />
    ]

    return (
        <div>
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

            <div className="flex items-center flex-row p-10">
                {testData.map((item, idx) => (
                    <VoteProgressBar
                        key={idx}
                        completed={item.completed}
                    />)
                )}

                <button className="w-1/6 bg-indigo-600 rounded-full py-5 px-7 items-center">
                    <h3 className="text-white font-bold text-center">Vote</h3>
                </button>
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
            <HorizontalCardList
                cards={cards}
            />
        </div>
    )
}

export default Project
