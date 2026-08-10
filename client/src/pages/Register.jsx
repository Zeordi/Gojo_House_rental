import { useEffect, useState, useCallback } from "react";
import {
  Logo,
  FormTextField,
  FormPasswordField,
  FormSelectField,
  AlertToast,
  DatePicker,
  CountrySelectField,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  registerOwner,
  registerTenant,
  clearAlert,
  stateClear,
  createAlert,
} from "../features/auth/authSlice";
import { useNavigate, useParams, Link } from "react-router-dom";
import registerImg from "../assets/images/registerImg.svg";
import { Button, CircularProgress } from "@mui/material";
import moment from "moment";
import { ageCalculator } from "../utils/valueFormatter";

const Register = () => {
  const { success, userType, errorFlag, errorMsg, isLoading, alertType } =
    useSelector((store) => store.auth);
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      navigate(`/account-created/${userType}`);
      dispatch(stateClear());
    }
  }, [navigate, userType, success, dispatch]);

  const [values, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phoneNumber: "",
    gender: "",
    password: "",
  });

  const [date, setDate] = useState(null);

  // preview image
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const previewImage = () => {
    if (image) {
      return (
        <div className="p-2">
          <img src={image} alt="profilePreview" className="h-24 md:h-28" />
        </div>
      );
    }
  };
  const handleChange = useCallback(
    (e) => {
      setFormValues({ ...values, [e.target.name]: e.target.value });
    },
    [values],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);
    formData.append("role", param.role);
    const dob = moment(date).format("YYYY-MM-DD");
    const age = ageCalculator(dob);
    if (age < 18) {
      dispatch(createAlert("You must be 18 years or older to register"));
      return;
    }
    formData.append("dateOfBirth", moment(date).format("YYYY-MM-DD"));

    if (param.role === "owner") {
      dispatch(registerOwner({ formData }));
    } else if (param.role === "tenant") {
      dispatch(registerTenant({ formData }));
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

  const isOwner = param.role === "owner";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-serif">
      <div className="flex w-full h-screen overflow-hidden bg-white shadow-2xl">
        {/* Left Side - Hero Section (Hidden on small screens) */}
        <div className="hidden xl:flex w-5/12 bg-gradient-to-br from-primaryDark to-primary relative items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl"></div>

          <div className="relative z-20 flex flex-col items-center text-center p-12 text-white">
            <img
              src={registerImg}
              className="w-3/4 max-w-sm mb-8 drop-shadow-2xl animate-pulse"
              alt="register banner"
              style={{ animationDuration: "3s" }}
            />
            <h2 className="font-display text-4xl mb-4 tracking-wide">
              Join Rent Manager
            </h2>
            <p className="text-lg font-light max-w-md opacity-90">
              {isOwner
                ? "Start managing your properties efficiently today."
                : "Create an account to find your next home."}
            </p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full xl:w-7/12 flex flex-col relative h-full">
          {/* Header */}
          <div className="p-6 flex items-center gap-3 bg-white z-20 border-b xl:border-none">
            <Logo />
            <h5 className="font-display text-2xl text-primaryDark">
              Rent Manager
            </h5>
          </div>

          <div className="flex-grow overflow-y-auto w-full">
            <div className="min-h-full flex flex-col items-center justify-center p-4 py-8 md:p-12">
              <div className="w-full max-w-2xl space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">
                    Create {isOwner ? "Owner" : "Tenant"} Account
                  </h3>
                  <p className="text-gray-500">
                    Fill in your details thoroughly to get started.
                  </p>
                </div>

                <form onSubmit={handleSubmit} id="form" className="space-y-6">
                  {/* Grid Layout for Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormTextField
                      label="First Name"
                      name="firstName"
                      type={"text"}
                      value={values.firstName}
                      handleChange={handleChange}
                      autoFocus={true}
                    />
                    <FormTextField
                      label="Last Name"
                      name="lastName"
                      type={"text"}
                      value={values.lastName}
                      handleChange={handleChange}
                    />
                    <div className="md:col-span-2">
                      <FormTextField
                        label="Email Address"
                        name="email"
                        type={"email"}
                        value={values.email}
                        handleChange={handleChange}
                      />
                    </div>
                    <FormTextField
                      label="Address"
                      name="address"
                      type={"text"}
                      value={values.address}
                      handleChange={handleChange}
                    />
                    <FormTextField
                      label="City"
                      name="city"
                      type={"text"}
                      value={values.city}
                      handleChange={handleChange}
                    />
                    <CountrySelectField
                      value={values.country}
                      setFormValues={setFormValues}
                      handleChange={handleChange}
                    />
                    <FormTextField
                      label="Phone Number"
                      name="phoneNumber"
                      type={"text"}
                      value={values.phoneNumber}
                      handleChange={handleChange}
                    />
                    <DatePicker
                      value={date}
                      label="Date of Birth"
                      handleChange={useCallback(
                        (date) => {
                          setDate(date);
                        },
                        [setDate],
                      )}
                    />
                    <FormSelectField
                      label="Gender"
                      name="gender"
                      options={["Male", "Female", "Other"]}
                      value={values.gender}
                      handleChange={handleChange}
                    />
                    <div className="md:col-span-2">
                      <FormPasswordField
                        value={values.password}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Image Upload Section */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                    <label
                      htmlFor="profileImg"
                      className="cursor-pointer font-medium text-primary hover:text-primaryDark mb-2 flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {image ? "Change Profile Image" : "Upload Profile Image"}
                    </label>
                    <input
                      required
                      name="profileImage"
                      className="hidden"
                      type="file"
                      id="profileImg"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                    {!image && (
                      <p className="text-sm text-gray-500">
                        JPG, JPEG, PNG or GIF (Max 3.5MB)
                      </p>
                    )}

                    {image && (
                      <div className="mt-4 p-2 border rounded shadow-sm bg-white">
                        <img
                          src={image}
                          alt="profilePreview"
                          className="h-24 w-24 object-cover rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="contained"
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
                        <CircularProgress
                          size={26}
                          sx={{
                            color: "#fff",
                          }}
                        />
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </div>

                  <div className="text-center pb-4">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link
                        to={`/login/${param.role}`}
                        className="text-secondary font-bold hover:text-secondaryDark transition-colors hover:underline"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="xl:hidden h-2 bg-gradient-to-r from-primary to-secondary shrink-0"></div>
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

export default Register;
