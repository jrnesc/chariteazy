import SavedProjectCardLarge from "./SavedProjectCardLarge";
import SavedProjectCardSmall from "./SavedProjectCardSmall";

const SavedProjects = () => {
  return (
    <div className="space-y-4 py-2 px-2">
        <h1 className="text-3xl font-extrabold text-black sm:text-4xl">Saved Projects</h1>
      {/* <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1"> */}
        <div class="relative space-y-4">
          <div class="flex items-end justify-center lg:justify-start space-x-4">
            <div class="rounded-lg shadow-lg w-1/2">
              <SavedProjectCardLarge />
            </div>
            <div className="rounded-lg shadow-lg w-1/2">
              <SavedProjectCardSmall />
            </div>
          </div>
          <div class="flex items-start justify-center lg:justify-start space-x-4 ">
            <div class="rounded-lg shadow-l w-1/2" >
              <SavedProjectCardSmall />
            </div>
            <div className="rounded-lg shadow-lg w-1/2">
              <SavedProjectCardLarge />
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default SavedProjects;
