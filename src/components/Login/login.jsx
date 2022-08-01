import axios from "axios";
import { useState } from "react";
import "./login.css";
export const Login = ({ isAuthenticate, setAuth }) => {
  const [Name, setName] = useState(String);
  const [Mobile, setMobile] = useState(Number);
  const [cMobile, setcMobile] = useState(Number);
  const [getOtp, setGetotp] = useState("");

  const [otpEnter, setEnter] = useState(true);

  const [otploading, setOtploading] = useState(false);

  const [dis, setDis] = useState(false);
  const handleOtp = () => {
    // console.log(Name,'moj',Mobile);
    setDis(true);
    if (Mobile.toString().length == 10 || cMobile.toString().length == 10) {
      if (Mobile == cMobile) {
        setOtploading(true);
        const api_key =
          "sbLhzweiqoCS3WI5ntBO7pPuvgAjV6HKN2am0JfcdG91yYXZR452cPmTtsrADQkOuoFvH38nSWG7qYZb";
        let genOtp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        sessionStorage.setItem("otp", genOtp + 1);
        axios
          .get(
            `https://www.fast2sms.com/dev/bulkV2?authorization=${api_key}&variables_values=${genOtp}&route=otp&numbers=${Mobile}`
          )
          .then((res) => {
            setOtploading(false);
            alert(`otp send to ${Mobile}`);
            // setEnter(false);
          });
      } else alert("Mobile Number not Match");
    } else {
      alert("Please provide a valid number");
    }
  };

  const handleLogin = () => {
    let otp = sessionStorage.getItem("otp");
    if (otp - 1 == +getOtp) {
      alert(`Welcome ${Name} Congratulation Login Suceesfull 🤓`);
      // setAuth(true);
    } else {
      alert(`otp not match`);
    }
  };

  return (
    <>
    <div className="otp">
      <h1 className=" h1">Login With OTP 😍</h1>
      <img
        className="loginLogo"
        src="https://play-lh.googleusercontent.com/n0GFhdliUbbaijnLZU7CpMOaOhujy55jtaMUUy_sHSR9AF_YDYEEPi5up1toFd3mTg=w240-h480-rw"
      />
      <input
        type="text"
        disabled={dis}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your name"
      />
      <input
        type="number"
        disabled={dis}
        onChange={(e) => setMobile(e.target.valueAsNumber)}
        placeholder="Enter Your mobile no.(enter only 10 digit no)"
      />
      <input
        type="number"
        disabled={dis}
        onChange={(e) => setcMobile(e.target.valueAsNumber)}
        placeholder="Confirm mobile no."
      />
      {cMobile.toString().length == 10 ? (
        Mobile == cMobile ? (
          <span className="mobileCheck">Matched!</span>
        ) : (
          <span className="mobileCheck" style={{ color: "red" }}>
            Not Matched!
          </span>
        )
      ) : (
        ""
      )}

      <input
        type="submit"
        disabled={Mobile != cMobile}
        value={"Send OTP"}
        onClick={handleOtp}
      />
      <hr />
      <input
        type="number"
        // disabled={otpEnter}
        onChange={(e) => setGetotp(e.target.value)}
        placeholder="Enter OTP"
      />
      <input
        type="button"
        // disabled={otpEnter}
        value={"login"}
        onClick={handleLogin}
        style={{ backgroundColor: "black", color: "white" }}
      />

      {otploading ? (
        <div className="otploading">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
            alt=""
          />
        </div>
        
      ) : (
        ""
      )}
      </div>
    </>
  );
};