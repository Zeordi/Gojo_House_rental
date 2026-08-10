import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import about1 from "../assets/images/about1.svg";
import about2 from "../assets/images/about2.svg";
import { Link } from "react-router-dom";

const AboutPageComponent = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primaryDark text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary opacity-10 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            About Rent Manager
          </h2>
          <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-2xl mx-auto">
            Your comprehensive platform for seamless rental management. Whether
            you're a property owner or a tenant, we simplify the entire process.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Property Owner Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primaryDark rounded-2xl opacity-20 blur-lg transform -rotate-2"></div>
              <img
                src={about1}
                alt="Property Owner"
                className="relative rounded-2xl shadow-xl w-full z-10 bg-white"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary bg-opacity-10 text-primaryDark rounded-full text-sm font-semibold tracking-wide uppercase">
              For Landlords
            </div>
            <h3 className="font-display text-3xl font-bold text-gray-800">
              Property Owner
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Take control of your properties with ease. Our platform empowers
              owners to:
            </p>
            <ul className="space-y-3">
              {[
                "Post and manage property listings",
                "Create digital rental contracts",
                "Track rent payments & history",
                "Manage tenant relationships",
                "Send automated payment reminders",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tenant Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-secondary bg-opacity-10 text-secondaryDark rounded-full text-sm font-semibold tracking-wide uppercase">
              For Renters
            </div>
            <h3 className="font-display text-3xl font-bold text-gray-800">
              Tenant
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find your perfect home and enjoy a hassle-free renting experience.
              Tenants can:
            </p>
            <ul className="space-y-3">
              {[
                "Browse available properties",
                "Save favorites for later",
                "Sign rental contracts digitally",
                "View payment schedules & history",
                "Receive timely notifications",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-secondaryDark rounded-2xl opacity-20 blur-lg transform rotate-2"></div>
              <img
                src={about2}
                alt="Tenant"
                className="relative rounded-2xl shadow-xl w-full z-10 bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div>
        <header className="flex m-1 shadow-sm">
          <Logo />
          <div className="flex flex-col justify-center ml-2">
            <h5 className="font-display">Rent Manager</h5>
            <p className="hidden text-xs md:block md:text-sm">
              Find and Manage your rentals in one place
            </p>
          </div>
        </header>
        <AboutPageComponent />
        <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Logo />

              <div className="flex flex-col ml-3 justify-center">
                <h1 className="font-display text-xl md:text-2xl">
                  Rent Manager
                </h1>
                <p className="text-xs md:text-sm">
                  Find and Manage your rentals in one place
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
              <li>
                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
          <span className="block text-sm  sm:text-center ">
            2023 |{" "}
            <Link to="/" className="hover:underline">
              Property Plus
            </Link>
          </span>
        </footer>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <AboutPageComponent />
      <Footer />
    </div>
  );
};

export default AboutPage;
