import { useState, useEffect } from "react";
import getAuthToken from'../helpers.js'

const UserCard = ({user}) => {
  const [votes, setVotes] = useState([]);
  

  useEffect(() => {
    const getVotes = async () => {
      const votesFromServer = await fetchVotes();
      setVotes(votesFromServer);
    };

    getVotes();
  }, []);

    // fetch votes
    const fetchVotes = async () => {
      const user_id = user['pk']
      // console.log(user_id)
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json", "Authorization":getAuthToken() },
       
      };
      const res = await fetch(`http://127.0.0.1:8000/api/v1/users/${user_id}/votes/`, requestOptions);
      const data = await res.json();
      // console.log(data.length)
      return data;
    };

  return (
    <div className="rounded-lg bg-yello border border-black p-1">
      <div className="flex flex-col items-center">
        <div className="rounded-full h-32 w-32 border-2 border-black bg-red-600 my-4">
          <img
            src="images/profilepic.svg"
            alt="Profile"
            className="rounded-full h-full w-full"
          />
        </div>
        <div className="text-center my-4">
          <h1 className="font-bold text-4xl">{user.first_name} {user.last_name}</h1>
          <p className="text-xl">{user.username}</p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block">
            {votes.length}
          </span>
          <span className="text-sm">Donations</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block">
            £5
          </span>
          <span className="text-sm">Donated</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
