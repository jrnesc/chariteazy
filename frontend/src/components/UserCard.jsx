const UserCard = ({user}) => {
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
            275
          </span>
          <span className="text-sm">Donations</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block">
            62
          </span>
          <span className="text-sm">Causes</span>
        </div>
        <div className="mr-4 p-3 text-center">
          <span className="text-xl font-bold block">
            £275
          </span>
          <span className="text-sm">Donated</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
