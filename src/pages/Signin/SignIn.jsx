import { database, provider } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
  const [login, setLogin] = useState(true);

  const history = useNavigate();

  const handleGoogleAuth = () => {
    signInWithPopup(database, provider)
      .then((data) => {
        const name = data.user.displayName;
        const email = data.user.email;
        const profilePic = data.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        history("/dash");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleauthSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return; // Don't proceed with authentication
    }

    if (type == "register") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data);
          history("/dash");
          toast.success("Registered successfully!");
        })
        .catch((error) => {
          toast.error("User already present, please Sign In", {
            position: "top-center",
          });
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data);
          history("/dash");
          toast.success("Logged in successfully!", {
            duration: 5000,
            position: "top-right",
          });
        })
        .catch((error) => {
          toast.error("User not Registered!", {
            duration: 5000,
            position: "top-center",
          });
          setLogin(false);
        });
    }
  };

  return (
    <div className="xl:flex h-screen bg-bg1">
      <div className="xl:w-[719.988px] hidden xl:inline-block">
        <svg
          className="xl:h-[1024px] xl:left-0 xl:fixed xl:top-0 xl:w-[720px]"
          xmlns="http://www.w3.org/2000/svg"
          width="720"
          height="1024"
          viewBox="0 0 720 1024"
          fill="none"
        >
          <path
            d="M0 0L719.988 0L569.314 1024H0V0Z"
            fill="url(#paint0_linear_0_147)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_147"
              x1="359.994"
              y1="0"
              x2="359.994"
              y2="1024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4285F4" />
              <stop offset="1" stop-color="#286DE0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="xl:h-[29px] xl:w-[69px] xl:mt-[59.81px] xl:text-white xl:font-poppins xl:text-[24px] xl:font-bold xl:leading-[29.445px] xl:tracking-[0.36px] xl:ml-[72.99px] xl:relative">
          LOGO
        </div>
        <div className="xl:mt-[375.19px] xl:h-[88px] xl:w-[246px] xl:text-7xl xl:ml-[171px] xl:text-white xl:font-montserrat xl:font-bold xl:relative">
          Board.
        </div>
        <div className="xl:flex xl:mt-[357px] xl:ml-[144.5px] xl:h-auto xl:w-[299px] xl:items-center xl:justify-between xl:relative">
          <img
            className="xl:relative xl:w-[44px] xl:h-[44px]"
            alt="Vector"
            src="./images/Vector2.svg"
          />
          <img
            className="xl:relative xl:w-[42px] xl:h-[41px]"
            alt="Vector"
            src="./images/Vector1.svg"
          />
          <img
            className="xl:w-[48px] xl:relative xl:h-[48px]"
            alt="Carbon logo linkedin"
            src="./images/Vector3.svg"
          />
          <img
            className="xl:w-[50px] xl:relative xl:h-[48px]"
            alt="Carbon logo discord"
            src="./images/Vector4.svg"
          />
        </div>
      </div>
      <div className="h-full flex flex-col items-center xl:items-start xl:justify-normal justify-center">
        <div className="xl:ml-[93.19px] w-auto">
          <div className="xl:w-[143.80585px] xl:h-[48.3012px] xl:mt-[235.32px] xl:flex-shrink-0 text-black font-montserrat xl:text-[36px] md:text-5xl xs:text-4xl max-xs:ml-5 md:ml-0 font-bold">
            Sign In
          </div>
          <div className="xl:mt-[5.49px] mt-5 xl:w-[176.738px] w-auto xl:h-[20.857px] xl:flex-shrink-0 text-black font-lato text-[16px] font-normal md:ml-0 max-xs:ml-5">
            Sign in to your account
          </div>

          <div className="xl:mt-[28.54px] mt-10 flex md:flex-row max-xs:flex-col">
            <div className="">
              <div
                className="md:w-[197.596px] max-xs:w-[360px] w-[198px] h-[34px] xl:h-[32.933px] flex-shrink-0 flex items-center justify-center z-[1] bg-white rounded-lg xl:shadow-none max-xs:shadow-md"
                onClick={handleGoogleAuth}
              >
                <img
                  className="w-[15.369px] h-[15.369px] flex-shrink-0 xl:mt-[8.78px] xl:mb-[8.78px] xl:ml-[20.86px] mr-[10.98px]"
                  src="./images/Vector5.svg"
                  alt=""
                />
                <span className="flex md:w-[129.535px] h-[16.466px] flex-col justify-center flex-shrink-0">
                  <span className="text-secondary-text align-middle font-montserrat md:text-[12px] max-xs:text-[15px] font-normal">
                    Sign in with Google
                  </span>
                </span>
              </div>
            </div>
            <div className="md:ml-[27.44px] max-xs:ml-0">
              <div className="md:w-[197.596px] max-xs:w-[360px] w-[198px] h-[34px] xl:h-[32.933px] flex-shrink-0 flex items-center justify-center bg-white rounded-lg md:mt-0 max-xs:mt-4 xl:shadow-none max-xs:shadow-md">
                <img
                  className="w-[12.624px] h-[15.369px] flex-shrink-0 xl:mt-[8.78px] xl:mb-[8.78px] xl:ml-[20.86px] mr-[10.98px]"
                  src="./images/Vector6.svg"
                  alt=""
                />
                <span className="flex md:w-[129.535px] h-[16.466px] flex-col justify-center flex-shrink-0">
                  <span className="text-secondary-text align-middle font-montserrat md:text-[12px] max-xs:text-[15px] font-normal">
                    Sign in with Apple
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-[422.635px] max-xs:w-[360px] h-[347.988px] flex-shrink-0 rounded-[20px] bg-white mt-[35.13px] xl:shadow-none max-xs:shadow-xl">
            <form
              onSubmit={(e) =>
                handleauthSubmit(e, login ? "signin" : "register")
              }
              className="flex flex-col pl-[32.93px] pt-[32.93px] md:pb-0 md-pr-0"
            >
              <div className="flex flex-col">
                <label className="md:w-[105.384px] h-[20.857px] flex-shrink-0 text-black font-lato text-[16px] font-normal">
                  Email address
                </label>
                <div className="md:w-[356.77px] max-xs:w-[295px] h-[43.91px] flex-shrink-0 rounded-[10px] bg-bg2 mt-[10.98px] ">
                  <input
                    type="email"
                    name="email"
                    className="outline-none w-auto pt-[10.98px] pl-[16.42px] pb-[12.08px] pr-[16.42px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-[21.96px]">
                <label className="w-[105.384px] h-[20.857px] flex-shrink-0 text-black font-lato text-[16px] font-normal">
                  Password
                </label>
                <div className="md:w-[356.77px] max-xs:w-[295px] h-[43.91px] flex-shrink-0 rounded-[10px] bg-bg3 mt-[10.98px] ">
                  <input
                    type="password"
                    name="password"
                    className="outline-none w-auto pt-[10.98px] pl-[16.42px] pb-[12.08px] pr-[16.42px] bg-transparent"
                  />
                </div>
              </div>
              <div className="w-[136.122px] h-[20.857px] flex-shrink-0 mt-[21.96px]">
                <span className="text-link font-lato text-[16px] font-normal">
                  Forgot password?
                </span>
              </div>
              <div className="flex md:w-[356.77px] max-xs:w-[295px] h-[43.91px] justify-center items-center flex-shrink-0 mt-[21.96px]">
                <button className="md:w-[356.77px] max-xs:w-[295px] h-[43.91px] flex-shrink-0 rounded-[10px] bg-bgSubmit">
                  <span className="w-[111.928px] h-[23.837px] flex-shrink-0 text-white align-middle font-montserrat text-[16px] font-bold">
                    {login ? <span>Sign In</span> : <span>Register</span>}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {login ? (
          <div className="w-[286.514px] h-[20.875px] flex-shrink-0 flex items-center xl:ml-[161.26px] mt-[21.96px] xl:justify-start justify-center">
            <span className="text-secondary-text align-middle font-lato text-[16px] font-normal">
              Don't have an account?
            </span>
            <span
              onClick={() => setLogin(false)}
              className="text-link font-lato text-[16px] font-normal"
            >
              &nbsp;Register here
            </span>
          </div>
        ) : (
          <div className="w-[286.514px] h-[20.875px]flex-shrink-0 flex items-center xl:ml-[161.26px] mt-[21.96px]">
            <span className="text-secondary-text align-middle font-lato text-[16px] font-normal">
              Already have an account?
            </span>
            <span
              onClick={() => setLogin(true)}
              className="text-link font-lato text-[16px] font-normal"
            >
              &nbsp;Sign In here
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
