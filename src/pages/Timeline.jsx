import { useEffect, useState } from "react";
import { getData } from "../utils/localDB";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import LoadingSpinner from "../components/LoadingSpinner";

const Timeline = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const storedData = getData();
      setData(storedData);
      setLoading(false);
    }, 500);
  }, []);

  const getIcon = (type) => {
    if (type === "Call") {
      return callIcon;
    }

    if (type === "Text") {
      return textIcon;
    }

    if (type === "Video") {
      return videoIcon;
    }

    return callIcon;
  };

  const formatDate = (time) => {
    const date = new Date(time);

    if (isNaN(date.getTime())) {
      return time;
    }

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const filteredData =
    filter === "all"
      ? data.slice().reverse()
      : data
          .filter((item) => item.type.toLowerCase() === filter)
          .slice()
          .reverse();

  return (
    <div className="py-8">
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-8">
          Timeline
        </h2>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-xs bg-[#F9FAFB] border border-[#D1D5DB] rounded-xl px-4 py-3 text-[#1F2937] text-base outline-none focus:border-[#244D3F]"
          >
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : filteredData.length === 0 ? (
          <div className="bg-[#F9FAFB] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">
              No timeline activity found
            </h3>
            <p className="text-[#6B7280]">
              Go to a friend details page and use Quick Check-In first.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-5 flex items-center gap-4"
              >
                <img
                  src={getIcon(item.type)}
                  alt={item.type}
                  className="w-9 h-9 object-contain"
                />

                <div>
                  <h3 className="text-2xl font-semibold text-[#244D3F]">
                    {item.type}{" "}
                    <span className="font-normal text-[#6B7280]">
                      with {item.name}
                    </span>
                  </h3>
                  <p className="text-lg text-[#6B7280] mt-1">
                    {formatDate(item.time)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;