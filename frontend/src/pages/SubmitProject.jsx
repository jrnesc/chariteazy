import React, { useState } from "react"

const SubmitProject = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [oneLiner, setOneLiner] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className="items-center">
      <h3 className="text-center py-10 text-4xl">Have a Cause Close To Your Heart?</h3>

      <h3 className="text-center p-4 text-3xl">Gather the info we need, submit the form and we'll sort out the rest</h3>

      <h3 className="text-center p-4 text-3xl">Charity made eazy, right?</h3>

      <form onSubmit={onSubmit} className="flex items-center mx-auto p-5 text-center">
        <label>
          Name:
                    <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
                    <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Phone No.:
                    <input
            type="tel"
            placeholder="Enter Email"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          About Your Cause:
                    <input
            type="text"
            placeholder="Cause One Liner"
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
            required
          />
        </label>

        {/* <label>
            NEED TO DEFINE MORE LABELS
          <input
            type="text"
            placeholder="Cause One Liner"
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
            required
          />
        </label> */}

        <input
          type="submit"
          value="Submit Form" />
      </form>

    </div>
  )
}

export default SubmitProject
