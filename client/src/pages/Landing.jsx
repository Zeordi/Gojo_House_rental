import { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, AlertToast, Footer } from "../components";
import landingImg from "../assets/images/landing1.svg";
import landingImg2 from "../assets/images/landing2.svg";
import landingTitle from "../assets/images/landingTitle.svg";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

import { Button } from "@mui/material";
import { clearAlert } from "../features/auth/authSlice";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const { user, userType, errorFlag, alertType, errorMsg } = useSelector(
    (store) => store.auth,
  );

  // if user is logged in, redirect to home page
  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

  // function to handle alert close
  const handleAlertClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(clearAlert());
    },
    [dispatch],
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-serif text-gray-800">
      {/* Navbar options */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col">
                <h5 className="font-display text-xl md:text-2xl text-primaryDark tracking-wide m-0 leading-none">
                  Rent Manager
                </h5>
                <span className="hidden md:block text-[0.65rem] text-gray-500 font-bold uppercase tracking-widest mt-1">
                  Property Management Simplified
                </span>
              </div>
            </div>
            {/* Optional: Add clear login/signup buttons in header for quick access */}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
              Find and Manage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                Rental Properties
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-12 leading-relaxed">
              The all-in-one platform for effortless property management.
              Whether you're an owner or a tenant, experience housing the way it
              should be.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ada2ff",
                  padding: "12px 36px",
                  fontSize: "1.1rem",
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 10px 25px -5px rgba(173, 162, 255, 0.4)",
                  "&:hover": {
                    backgroundColor: "#8f86d7",
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 30px -5px rgba(173, 162, 255, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => {
                  ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                sx={{
                  padding: "12px 36px",
                  fontSize: "1.1rem",
                  borderRadius: "50px",
                  textTransform: "none",
                  borderWidth: "2px",
                  "&:hover": {
                    borderWidth: "2px",
                    backgroundColor: "rgba(238, 155, 1, 0.05)",
                  },
                }}
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>

            <div className="relative max-w-5xl mx-auto mt-8 perspective-1000">
              <div className="relative transform transition-transform duration-700 hover:scale-[1.01]">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-tertiary to-primary rounded-xl blur opacity-20"></div>
                <img
                  src={landingTitle}
                  alt="Dashboard Preview"
                  className="relative w-full rounded-xl shadow-2xl border border-gray-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <div ref={ref} className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {/* Owner Section */}
            <div className="group relative bg-white rounded-3xl p-4 md:p-8 transition-all hover:bg-gray-50/50">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={landingImg2}
                    alt="Property Owner"
                    className="relative w-full h-auto drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-secondaryDark font-bold rounded-full text-sm uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    For Property Owners
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                    Maximize Income, <br /> Minimize Stress
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    List your properties, screen tenants, and track payments
                    seamlessly. Our tools give you full control over your real
                    estate portfolio without the headache.
                  </p>
                  <ul className="space-y-4 text-gray-700 font-medium">
                    {[
                      "Post properties instantly",
                      "Direct tenant communication",
                      "Automated payment tracking",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-100 text-green-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 pt-4">
                    <Button
                      onClick={() => navigate("/login/owner")}
                      variant="contained"
                      size="large"
                      color="secondary"
                      sx={{
                        color: "white",
                        padding: "10px 30px",
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: "0 4px 14px 0 rgba(238, 155, 1, 0.39)",
                      }}
                    >
                      Login as Owner
                    </Button>
                    <span className="text-gray-300 text-2xl font-light">|</span>
                    <Button
                      onClick={() => navigate("/register/owner")}
                      variant="text"
                      size="large"
                      color="primary"
                      sx={{
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.dark",
                        },
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Tenant Section */}
            <div className="group relative bg-white rounded-3xl p-4 md:p-8 transition-all hover:bg-gray-50/50">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 bg-tertiary/20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={landingImg}
                    alt="Tenant"
                    className="relative w-full h-auto drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-tertiaryDark font-bold rounded-full text-sm uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    For Tenants
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                    Find Your <br /> Perfect Home
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Browse verified listings, contact landlords directly, and
                    manage your rent payments all in one secure dashboard.
                  </p>
                  <ul className="space-y-4 text-gray-700 font-medium">
                    {[
                      "Browse distinct listings",
                      "Keep track of due dates",
                      "Secure digital payments",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-100 text-green-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 pt-4">
                    <Button
                      onClick={() => navigate("/login/tenant")}
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#00ACCF",
                        color: "white",
                        padding: "10px 30px",
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: "0 4px 14px 0 rgba(0, 172, 207, 0.39)",
                        "&:hover": { backgroundColor: "#0496b4" },
                      }}
                    >
                      Login as Tenant
                    </Button>
                    <span className="text-gray-300 text-2xl font-light">|</span>
                    <Button
                      onClick={() => navigate("/register/tenant")}
                      variant="text"
                      size="large"
                      color="tertiary"
                      sx={{
                        color: "tertiary.main",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "tertiary.dark",
                        },
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
      </main>

      <Footer />
      <AlertToast
        alertFlag={errorFlag}
        alertMsg={errorMsg}
        alertType={alertType}
        handleClose={handleAlertClose}
      />
    </div>
  );
};

export default Landing;
