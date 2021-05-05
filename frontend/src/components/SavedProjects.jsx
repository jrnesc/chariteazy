import SavedProjectCardLarge from "./SavedProjectCardLarge";
import SavedProjectCardSmall from "./SavedProjectCardSmall";

const SavedProjects = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-black text-center">Saved Projects</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
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
        </div>
        <div className="row-span-2">
          <SavedProjectCardLarge />
        </div>
        <div>
          <SavedProjectCardSmall />
        </div>
      </div>
    </div>
  );
};

export default SavedProjects;
