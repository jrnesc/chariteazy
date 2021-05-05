const UserCard = () => {
  return (
    <div className="rounded-b-3xl bg-yellow-400 flex space-x-4 py-2 px-2 relative ">
      <div className="rounded-full w-1/5 h-1/5 border-2 border-black bg-red-600 flex-none ">
        <img
          src="images/ProfilePic.svg"
          alt="Profile"
          className="rounded-full h-full w-full border  "
        />
      </div>
      <div>
        <div>
          <h1 className="text-white font-bold text-lg">John Johnnington</h1>
          <p className="text-white text-sm">@johnnnyBoy</p>
        </div>
        <ul className="space-x-4 py-4 ">
          <li className="inline-block">
            <p className="text-white font-bold text-xl">275</p>
            <p className="text-white text-xs">Donations</p>
          </li>
          <li className="inline-block">
            <p className="text-white font-bold text-xl">62</p>
            <p className="text-white text-xs">Causes</p>
          </li>
          <li className="inline-block">
            <p className="text-white font-bold text-xl">£275</p>
            <p className="text-white text-xs">Donated</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
