import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { HiArrowLeft, HiCalendar, HiClock, HiFlag } from "react-icons/hi";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { saveData } from "../utils/localDB";

const FriendDetails = () => {
  const friends = useLoaderData();
  const { id } = useParams();

  const friendId = parseInt(id);
  const friend = friends.find((item) => item.id === friendId);

  if (!friend) {
    return (
      <div className="py-10">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">
            Friend not found
          </h2>
          <p className="text-[#6B7280] mb-6">
            No friend data matched this profile. Please go back and select a valid friend.
          </p>
          <Link
            to="/"
            className="btn bg-[#176AE5] text-white border-none hover:bg-[#1257bf] rounded-xl px-6"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    short_note,
    preferred_contact,
    goal,
    next_due_date,
  } = friend;

  const getStatusStyle = () => {
    if (status === "overdue") return "bg-[#FEE2E2] text-[#DC2626]";
    if (status === "almost due") return "bg-[#FEF3C7] text-[#D97706]";
    return "bg-[#DCFCE7] text-[#16A34A]";
  };

  

  const handleCheckIn = (type) => {
    const newData = {
      id: Date.now(),
      name,
      type,
      time: new Date().toLocaleString(),
    };
    saveData(newData);

    const toastStyles = {
      Call: { background: "#176AE5", color: "#fff" },
      Text: { background: "#22C55E", color: "#fff" },
      Video: { background: "#F59E0B", color: "#fff" },
    };

    toast.success(`${type} with ${name} saved!`, { style: toastStyles[type] });
  };

  const checkInActions = [
    { type: "Call", icon: callIcon, color: "#176AE5" },
    { type: "Text", icon: textIcon, color: "#22C55E" },
    { type: "Video", icon: videoIcon, color: "#F59E0B" },
  ];

  const statCards = [
    { label: "Days Since Contact", value: days_since_contact, icon: <HiClock size={18} /> },
    { label: "Goal (Days)", value: goal, icon: <HiFlag size={18} /> },
    { label: "Next Due", value: next_due_date, icon: <HiCalendar size={18} /> },
  ];

  return (
    <div className="py-6 md:py-8">
      

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        
        <div className="lg:col-span-4 space-y-4">

          
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="relative inline-block">
              <img
                src={picture}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-[#EEF4FF]"
              />
              
            </div>

            <h2 className="text-2xl font-bold text-[#1F2937] mt-4">{name}</h2>

            <div className="mt-3">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize ${getStatusStyle()}`}>
                {status}
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#E8F5EE] text-[#1F5A4A] text-xs px-3 py-1 rounded-full uppercase font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[#6B7280] italic mt-5 text-sm leading-relaxed">
              "{short_note}"
            </p>

            <div className="mt-4 space-y-1 text-sm text-[#6B7280]">
              <p>
                Preferred:{" "}
                <span className="font-medium text-[#1F2937]">{preferred_contact}</span>
              </p>
              <p className="break-all">{email}</p>
            </div>
          </div>

          
          <div className="space-y-3 ">
            <button className="w-full bg-white rounded-xl shadow-sm px-5 py-4 text-[#1F2937] font-medium hover:bg-[#F9FAFB] transition-colors text-left flex items-center gap-3 ">
               Snooze 2 Weeks
            </button>
            <button className="w-full bg-white rounded-xl shadow-sm px-5 py-4 text-[#1F2937] font-medium hover:bg-[#F9FAFB] transition-colors text-left flex items-center gap-3">
               Archive
            </button>
            <button className="w-full bg-white rounded-xl shadow-sm px-5 py-4 text-[#F44336] font-medium hover:bg-[#FEF2F2] transition-colors text-left flex items-center gap-3">
               Delete
            </button>
          </div>
        </div>

        
        <div className="lg:col-span-8 space-y-5">

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {statCards.map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl shadow-sm p-5 text-center">
                <div className="flex items-center justify-center gap-1.5 text-[#176AE5] mb-2">
                  {icon}
                  <span className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
                    {label}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-[#1F5A4A]">{value}</p>
              </div>
            ))}
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#1F2937]">Relationship Goal</h3>
              <p className="text-[#6B7280] mt-1 text-sm">
                Connect every{" "}
                <span className="font-bold text-[#176AE5]">{goal} days</span>
              </p>
            </div>
            <button className="btn btn-sm bg-[#F3F4F6] border-none shadow-none text-[#1F2937] hover:bg-[#E5E7EB] self-start sm:self-auto">
              Edit
            </button>
          </div>

          
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-6">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {checkInActions.map(({ type, icon, color }) => (
                <button
                  key={type}
                  onClick={() => handleCheckIn(type)}
                  className="bg-[#F9FAFB] hover:bg-[#F3F4F6] rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <img src={icon} alt={type} className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#1F2937]">{type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;