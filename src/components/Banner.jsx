import logoXL from "../assets/logo-xl.png";

const Banner = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 mt-6 shadow-sm">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="space-y-5 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#0F0F0F]">
            Keep Your Friendships
            <br />
            Strong and Active
          </h1>
          <p className="text-[#555] text-base md:text-lg max-w-xl">
            Track your communication, stay connected with your favorite people,
            and build stronger relationships with simple interaction history.
          </p>
          <button className="btn bg-[#176AE5] text-white border-none hover:bg-[#1257bf] rounded-xl px-6">
            Get Started
          </button>
        </div>

        <div className="w-full max-w-xs md:max-w-sm">
          <img
            src={logoXL}
            alt="Keen Keeper"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;