import UserCard from "../components/UserCard";
import SavedProjects from "../components/SavedProjects";
import PaymentOptionsForm from "../components/PaymentOptionsForm";
import ImpactReport from "../components/ImpactReport";

const Profile = () => {
  return (
    <div className="-mt-5 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserCard />
        <div className="row-span-3">
         <SavedProjects />
        </div>
        <ImpactReport />
        <PaymentOptionsForm />
      </div>
    </div>
  );
};

export default Profile;
