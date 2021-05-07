import React, { useState } from "react"

const SubmitProject = () => {
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [ownerDescription, setOwnerDescription] = useState('')
  const [causeDescription, setCauseDescription] = useState('')
  const [image, setImage] = useState('')
  const [startDate, setStartDate] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <h3 className="text-3xl font-extrabold text-center sm:text-4xl py-12">Have a Cause Close To Your Heart?</h3>

      <h3 className="text-3xl font-bold text-center sm:text-3xl py-5">Gather the info we need, submit the form and we'll sort out the rest</h3>

      <h3 className="text-3xl font-bold text-center sm:text-3xl py-5">Charity made eazy, right?</h3>

      <div className="flex flex-col py-8 items-center mx-auto">
        <form onSubmit={onSubmit}>

          <div className="flex flex-col mb-4">
            <input
              type="text"
              className="rounded-lg appearance-none w-full py-12 px-5 bg-white shadow-sm text-base focus:outline-none ring ring-yello text-center text-2xl placeholder-black font-semibold"
              placeholder="Enter the Name of Your Cause"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <input
              type="text"
              className="rounded-lg appearance-none w-full py-12 px-5 bg-white shadow-sm text-base focus:outline-none ring ring-yello text-center text-2xl placeholder-black font-semibold"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <input
              type="text"
              className="rounded-lg appearance-none w-full py-12 px-5 bg-white shadow-sm text-base focus:outline-none ring ring-yello text-center text-2xl placeholder-black font-semibold"
              placeholder="Tell Us About Your Role in the Cause"
              value={ownerDescription}
              onChange={(e) => setOwnerDescription(e.target.value)}
              required
            />
          </div>


          <div className="flex flex-col mb-4">
            <input
              type="text"
              className="rounded-lg appearance-none w-full py-12 px-5 bg-white shadow-sm text-base focus:outline-none ring ring-yello text-center text-2xl placeholder-black font-semibold"
              placeholder="Tell Us About Your Cause"
              value={causeDescription}
              onChange={(e) => setCauseDescription(e.target.value)}
              required
            />
          </div>



          <div className="flex flex-col mb-4">
            <input
              type="file"
              className="rounded-lg w-full py-12 px-5 bg-white shadow-sm focus:outline-none ring ring-yello text-center text-2xl placeholder-black font-semibold"
              placeholder="Upload a Picture Relating to Your Cause"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <input
              type="datetime-local"
              className="rounded-lg w-full py-12 px-5 bg-white shadow-sm focus:outline-none ring ring-yello text-center text-2xl placeholder-black font-semibold"
              placeholder="Start Date (This Doesn't Affect Voting Rounds)"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className=" w-full border border-black py-2 px-5 bg-yello hover:bg-yellow-200 focus:ring-gray-500 focus:ring-offset-gray-200 transition ease-in duration-200 text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-center"
              value="Submit">
              Submit
          </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default SubmitProject

