import { useEffect, useState, useCallback } from "react";
import {
  Logo,
  FormPasswordField,
  FormTextField,
  AlertToast,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAlert,
  loginOwner,
  loginTenant,
  stateClear,
} from "../features/auth/authSlice";
import { useNavigate, useParams, Link } from "react-router-dom";
import loginImg from "../assets/images/loginImg.svg";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const {
    user,
    accountStatus,
    success,
    userType,
    errorMsg,
    errorFlag,
    alertType,
    isLoading,
  } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  const [values, setFormValues] = useState({ email: "", password: "" });

  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

  useEffect(() => {
    if (success && accountStatus) {
      navigate(`/${userType}`);
    } else if (success && !accountStatus) {
      navigate(`/account-created/${userType}`);
      dispatch(stateClear());
    }
  }, [accountStatus, success, navigate, userType, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    const userInfo = {
      email,
      password,
      role: param.role,
    };
    if (param.role === "owner") {
      dispatch(loginOwner({ userInfo }));
    } else if (param.role === "tenant") {
      dispatch(loginTenant({ userInfo }));
    }
  };

  const handleClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(clearAlert());
    },
    [dispatch],
  );

  const handleChange = useCallback(
    (e) => {
      setFormValues({ ...values, [e.target.name]: e.target.value });
    },
    [values],
  );

  const isOwner = param.role === "owner";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-serif">
      <div className="flex w-full h-screen overflow-hidden bg-white shadow-2xl">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primaryDark to-primary relative items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl"></div>

          <div className="relative z-20 flex flex-col items-center text-center p-12 text-white">
            <img
              src={loginImg}
              className="w-3/4 max-w-md mb-8 drop-shadow-2xl animate-pulse"
              alt="login banner"
              style={{ animationDuration: "3s" }}
            />
            <h2 className="font-display text-4xl mb-4 tracking-wide">
              Welcome to Rent Manager
            </h2>
            <p className="text-lg font-light max-w-md opacity-90">
              {isOwner
                ? "Manage your properties and tenants efficiently in one secure place."
                : "Find your perfect home and manage your rental payments with ease."}
            </p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col relative overflow-y-auto">
          {/* Header / Logo */}
          <div className="p-6 md:p-10 flex items-center gap-3">
            <Logo />
            <h5 className="font-display text-2xl text-primaryDark">
              Rent Manager
            </h5>
          </div>

          <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 pb-12">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center md:text-left">
                <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">
                  {isOwner ? "Owner Portal" : "Tenant Portal"}
                </h3>
                <p className="text-gray-500">
                  Please sign in to access your dashboard.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <FormTextField
                    value={values.email}
                    name={"email"}
                    type={"email"}
                    label={"Email Address"}
                    handleChange={handleChange}
                    autoFocus={true}
                  />

                  <div className="relative">
                    <FormPasswordField
                      value={values.password}
                      handleChange={handleChange}
                    />
                    <div className="flex justify-end mt-2">
                      <Link
                        to={`/forgot-password/${param.role}`}
                        className="text-sm font-medium text-tertiary hover:text-tertiaryDark transition-colors"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    disabled={isLoading}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      width: "100%",
                      paddingY: 1.5,
                      textTransform: "none",
                      fontSize: "1.05rem",
                      borderRadius: 2,
                      boxShadow: "0 4px 14px 0 rgba(173, 162, 255, 0.39)",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        boxShadow: "0 6px 20px 0 rgba(173, 162, 255, 0.23)",
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={26} sx={{ color: "#fff" }} />
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to={`/register/${param.role}`}
                      className="text-secondary font-bold hover:text-secondaryDark transition-colors hover:underline"
                    >
                      Register Now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:hidden absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
        </div>
      </div>

      <AlertToast
        alertFlag={errorFlag}
        alertMsg={errorMsg}
        alertType={alertType}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Login;
