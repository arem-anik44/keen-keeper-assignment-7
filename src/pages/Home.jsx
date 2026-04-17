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

      <div className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F0F0F] text-center mb-2">
          Meet Your Friendship Circle
        </h2>
        <p className="text-center text-[#666] mb-8">
          Track who needs your attention and stay connected with the people that matter most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;