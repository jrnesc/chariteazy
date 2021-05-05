import UserCard from "../components/UserCard";
import SavedProjects from "../components/SavedProjects";
import PaymentOptionsForm from "../components/PaymentOptionsForm";
import ImpactReport from "../components/ImpactReport";

const Profile = () => {
  return (
    <div className="mt-0 md:mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <UserCard />
        </div>
        <div className="col-span-1 lg:col-span-2 row-span-3">
          <SavedProjects />
        </div>
        <div>
          <PaymentOptionsForm />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <ImpactReport />
        </div>
      </div>
    </div>
  );
};

export default Profile;
