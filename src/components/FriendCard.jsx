import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  const getStatusClass = () => {
    if (status === "overdue") {
      return "bg-[#F44336] text-white";
    }

    if (status === "almost due") {
      return "bg-[#F59E0B] text-white";
    }

    return "bg-[#22C55E] text-white";
  };

  return (
    <Link to={`/friend/${id}`}>
      <div className="bg-[#F3F4F6] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer">
        
        <img
          src={picture}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />

        <h3 className="text-2xl font-bold text-[#1F2937] mt-4">
          {name}
        </h3>

        <p className="text-[#6B7280] mt-2">
          {days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#C7F0D8] text-[#3A3A3A] text-sm px-3 py-1 rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <span
            className={`px-4 py-1 rounded-full text-sm capitalize ${getStatusClass()}`}
          >
            {status}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default FriendCard;