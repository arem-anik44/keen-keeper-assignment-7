import logoXL from "../assets/logo-xl.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F5A4A] mt-10 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20 text-center">
        <img
          src={logoXL}
          alt="KeenKeeper"
          className="mx-auto mb-6 max-w-[280px] md:max-w-[420px] w-full"
        />

        <p className="text-sm md:text-base text-[#D1D5DB] max-w-3xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Social Links</h3>

        <div className="flex items-center justify-center gap-4 mb-10">
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-5 h-5 object-contain"
            />
          </button>

          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-5 h-5 object-contain"
            />
          </button>

          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>

        <div className="border-t border-[#2A6A57] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#D1D5DB]">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;