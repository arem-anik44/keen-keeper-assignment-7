import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SummaryCards from "../components/SummaryCards";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const friends = useLoaderData();

  return (
    <div className="py-6 md:py-8">
      <Banner />
      <SummaryCards />

      <div className=" mt-7 border-t-2 border-gray-200">
        

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;