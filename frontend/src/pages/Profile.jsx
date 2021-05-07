import UserCard from "../components/UserCard";
import SavedProjects from "../components/SavedProjects";
import PaymentOptionsForm from "../components/PaymentOptionsForm";
import ImpactReport from "../components/ImpactReport";

import {useState,useEffect}  from 'react'
import getAuthToken from'../helpers.js'
const Profile = ({user}) => {
  const[userAccount,setUserAccount]= useState([])

  useEffect(() => {
    const getUserAccount = async () => {
      const userAccountFromServer = await fetchUserAccount();
      setUserAccount(userAccountFromServer);
    };
    getUserAccount();
    console.log(userAccount.donation_amount)
  }, []);


    // fetch causes
    const fetchUserAccount = async () => {
      const user_id = user['pk']
      console.log(user_id)
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json", "Authorization":getAuthToken() },
       
      };
      // console.log(user_id)
      // console.log(getAuthToken())
      // const token = getAuthToken()
      const res = await fetch(`http://127.0.0.1:8000/api/v1/users/${user_id}`, requestOptions);
      const data = await res.json();
      // console.log(data)
      return data;
    };

  return (
    <div className="mt-0 md:mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <UserCard user={user} />
        </div>
        <div className="col-span-1 lg:col-span-2 row-span-3">
          <SavedProjects user={user} />
        </div>
        <div>
          <PaymentOptionsForm userAccount = {userAccount} />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <ImpactReport />
        </div>
      </div>
    </div>
  );
};

export default Profile;
