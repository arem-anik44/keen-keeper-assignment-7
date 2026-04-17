import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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

  const getStatusClass = () => {
    if (status === "overdue") {
      return "bg-[#F44336] text-white";
    }

    if (status === "almost due") {
      return "bg-[#F59E0B] text-white";
    }

    return "bg-[#22C55E] text-white";
  };

  const handleCheckIn = (type) => {
  const newData = {
    id: Date.now(),
    name: name,
    type: type,
    time: new Date().toLocaleString(),
  };

  saveData(newData);

  if (type === "Call") {
    toast.success(`Call with ${name} saved!`, {
      style: {
        background: "#176AE5",
        color: "#fff",
      },
    });
  }

  if (type === "Text") {
    toast.success(`Text with ${name} saved!`, {
      style: {
        background: "#22C55E",
        color: "#fff",
      },
    });
  }

  if (type === "Video") {
    toast.success(`Video with ${name} saved!`, {
      style: {
        background: "#F59E0B",
        color: "#fff",
      },
    });
  }
};

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <img
              src={picture}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />

            <h2 className="text-3xl font-bold text-[#1F2937] mt-4">{name}</h2>

            <div className="mt-4">
              <span
                className={`px-4 py-1 rounded-full text-sm capitalize ${getStatusClass()}`}
              >
                {status}
              </span>
            </div>

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

            <p className="text-[#6B7280] italic mt-6 text-lg">"{short_note}"</p>
            <p className="text-[#6B7280] mt-2">
              Preferred: {preferred_contact}
            </p>
            <p className="text-[#6B7280] mt-1 break-all">{email}</p>
          </div>

          <button className="w-full bg-white rounded-xl shadow-sm px-6 py-5 text-[#1F2937] text-xl font-medium">
            Snooze 2 Weeks
          </button>

          <button className="w-full bg-white rounded-xl shadow-sm px-6 py-5 text-[#1F2937] text-xl font-medium">
            Archive
          </button>

          <button className="w-full bg-white rounded-xl shadow-sm px-6 py-5 text-[#F44336] text-xl font-medium">
            Delete
          </button>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-5xl font-bold text-[#244D3F]">
                {days_since_contact}
              </h3>
              <p className="text-[#6B7280] text-2xl mt-3">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-5xl font-bold text-[#244D3F]">{goal}</h3>
              <p className="text-[#6B7280] text-2xl mt-3">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#244D3F]">
                {next_due_date}
              </h3>
              <p className="text-[#6B7280] text-2xl mt-3">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-4xl font-semibold text-[#244D3F]">
                Relationship Goal
              </h3>
              <p className="text-[#6B7280] text-3xl mt-6">
                Connect every{" "}
                <span className="font-bold text-[#1F2937]">{goal} days</span>
              </p>
            </div>

            <button className="btn bg-[#F3F4F6] border-none shadow-none text-[#1F2937]">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-4xl font-semibold text-[#244D3F] mb-6">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="bg-[#F3F4F6] rounded-xl p-6 flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={callIcon}
                  alt="Call"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl text-[#1F2937]">Call</span>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="bg-[#F3F4F6] rounded-xl p-6 flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={textIcon}
                  alt="Text"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl text-[#1F2937]">Text</span>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="bg-[#F3F4F6] rounded-xl p-6 flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={videoIcon}
                  alt="Video"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl text-[#1F2937]">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;