import UserCard from "../components/UserCard";
import SavedProjects from "../components/SavedProjects";
import PaymentOptions from "../components/PaymentOptions";
import ImpactReport from "../components/ImpactReport";

const Profile = () => {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-4">
      <div className="">
        <UserCard />
      </div>
      <div className="">
        <SavedProjects />
      </div>
      
      <div className="">
        <PaymentOptions />
      </div>
      <div>
        <ImpactReport />
      </div>
    </div>
  );
};

export default Profile;
