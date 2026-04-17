const SummaryCards = () => {
  const cards = [
    {
      id: 1,
      title: "Total Friends",
      value: "08",
    },
    {
      id: 2,
      title: "Close Friends",
      value: "04",
    },
    {
      id: 3,
      title: "This Week Contact",
      value: "12",
    },
    {
      id: 4,
      title: "Pending Reconnect",
      value: "03",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      {cards.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-6 shadow-sm text-center"
        >
          <h3 className="text-lg font-semibold text-[#444]">{item.title}</h3>
          <p className="text-3xl md:text-4xl font-bold text-[#176AE5] mt-3">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;