import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#F4F7FF]">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 text-center max-w-xl w-full">
        <h1 className="text-6xl md:text-7xl font-bold text-[#1F2937] mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-3">
          Page not found
        </h2>
        <p className="text-[#6B7280] mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="btn bg-[#176AE5] text-white border-none hover:bg-[#1257bf] rounded-xl px-6"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;