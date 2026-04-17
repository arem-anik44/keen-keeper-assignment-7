const SummaryCards = () => {
  const cards = [
    {
      id: 1,
      title: "Total Friends",
      value: "16",
    },
    {
      id: 2,
      title: "On Tack",
      value: "4",
    },
    {
      id: 3,
      title: "Need Attention  ",
      value: "7",
    },
    {
      id: 4,
      title: "Interactions This Month",
      value: "13",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      {cards.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-6 shadow-sm text-center"
        >
          <p className="text-3xl md:text-4xl font-bold text-[#244D3F] ">
            {item.value}
          </p>
          <h3 className="text-[18px] mt-3 text-[#64748B]">{item.title}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;