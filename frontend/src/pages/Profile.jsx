import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import UserCard from "../components/UserCard";
import SavedProjects from "../components/SavedProjects";
import PaymentOptionsForm from "../components/PaymentOptionsForm";
import ImpactReport from "../components/ImpactReport";


const stripePromise = loadStripe(
  "pk_test_51IwuOvAzUg24CpHQ5CUi3imiQrXbzl7gZfDeOF7q2M9KuqjoQ8WpaBoXCMC7bm1oiBVJXKXeUwYr0KCbza23l3Y300ZkRUC8jL"
);

const Profile = ({ user }) => {
  return (
    <div className="mt-0 md:mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <UserCard user={user} />
        </div>
        <div className="col-span-1 lg:col-span-2 row-span-3">
          <SavedProjects user={user} />
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <PaymentOptionsForm user={user} />
          </Elements>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <ImpactReport />
        </div>
      </div>
    </div>
  );
};

export default Profile;
