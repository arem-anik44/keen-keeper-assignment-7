import logoXL from "../assets/logo-xl.png";

const Banner = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 mt-6 shadow-sm">
      <div className="flex flex-col items-center justify-center text-center space-y-5">
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#0F0F0F]">
          Friends to keep close in your life
        </h1>

        <p className="text-[#1F2937] text-base md:text-lg max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] text-white border-none hover:bg-[#1257bf] rounded-xl px-6">
          Add a Friend
        </button>

      </div>
    </div>
  );
};

export default Banner;