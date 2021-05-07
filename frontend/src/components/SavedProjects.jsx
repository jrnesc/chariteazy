import SavedProjectCardLarge from "./SavedProjectCardLarge";
import SavedProjectCardSmall from "./SavedProjectCardSmall";
import {useState,useEffect}  from 'react'
import { Link } from "react-router-dom";
import getAuthToken from'../helpers.js'

const SavedProjects = ({user}) => {
  const[savedCauses,setSavedCauses]= useState([])

  useEffect(() => {
    const getSavedCauses = async () => {
      const savedCausesFromServer = await fetchSavedCauses();
      setSavedCauses(savedCausesFromServer);
    };
    console.log(user)
    console.log(user['pk'])
    // console.log(user.pk)

    getSavedCauses();
  }, []);


    // fetch causes
    const fetchSavedCauses = async () => {
      const user_id = user['pk']
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json", "Authorization":getAuthToken() },
       
      };
      // console.log(user_id)
      // console.log(getAuthToken())
      const res = await fetch(`http://127.0.0.1:8000/api/v1/users/${user_id}/favourites/`, requestOptions);
      const data = await res.json();
  
      return data;
    };

  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-black text-center">Saved Projects</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {savedCauses.map((cause,index) => (
          <Link to={{ pathname: "/project/" + cause.id }}>
            <SavedProjectCardLarge key={index} cause={cause} />
          </Link>

        ))}
        {/* <div className="row-span-2">
          <SavedProjectCardLarge />
        </div>
        <div>
          <SavedProjectCardSmall />
        </div>
        <div className="row-span-2">
          <SavedProjectCardLarge />
        </div>
        <div>
          <SavedProjectCardSmall />
        </div>
        <div className="row-span-2">
          <SavedProjectCardLarge />
        </div>
        <div>
          <SavedProjectCardSmall />
        </div>
        <div className="row-span-2">
          <SavedProjectCardLarge />
        </div>
        <div>
          <SavedProjectCardSmall />
        </div> */}
      </div>
    </div>
  );
};

export default SavedProjects;
