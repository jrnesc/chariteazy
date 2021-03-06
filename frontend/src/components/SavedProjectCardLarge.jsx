const SavedProjectCard = ({cause}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-black h-full">
      <img
        alt="Cause"
        src="./images/kente-cloth.jpeg"
        className="w-full object-cover border-b border-black"
      />
      <h2 className="text-md font-extrabold text-black text-center">
        {console.log(cause)}
      </h2>
    </div>
  );
};

export default SavedProjectCard;
