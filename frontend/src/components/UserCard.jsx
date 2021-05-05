const UserCard = () => {
  return (
    <div className="rounded-lg bg-yello border border-black p-1">
      <div class="flex flex-col items-center">
        <div className="rounded-full h-32 w-32 border-2 border-black bg-red-600 my-4">
          <img
            src="images/profilepic.svg"
            alt="Profile"
            className="rounded-full h-full w-full"
          />
        </div>
        <div className="text-center my-4">
          <h1 className="font-bold text-4xl">John Johnnington</h1>
          <p className="text-xl">@johnnnyboy</p>
        </div>
      </div>
      <div class="flex justify-center my-4">
        <div class="mr-4 p-3 text-center">
          <span class="text-xl font-bold block">
            275
          </span>
          <span class="text-sm">Donations</span>
        </div>
        <div class="mr-4 p-3 text-center">
          <span class="text-xl font-bold block">
            62
          </span>
          <span class="text-sm">Causes</span>
        </div>
        <div class="mr-4 p-3 text-center">
          <span class="text-xl font-bold block">
            £275
          </span>
          <span class="text-sm">Donated</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
