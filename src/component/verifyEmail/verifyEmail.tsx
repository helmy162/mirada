import { useReducer, useRef, useState, useEffect } from "react";
import { VerifyField, ButtonEvent } from "./types";
import Reducer from "./Reducer";
import "./verifyEmail.css";
import Background from "../authenticationBackground/background";
import WarningIcon from "../../assets/authentication/warning-icon/warning.png";
import WarningIcon2x from "../../assets/authentication/warning-icon/warning@2x.png";
import WarningIcon3x from "../../assets/authentication/warning-icon/warning.png";
import { useAuth } from "../../context";
import Timer from "./timer";
import { HiOutlinePencil } from "react-icons/hi";
import { Link } from "react-router-dom";
import tick from "../props/tick.png";
import OtpInput from "react-otp-input";
import Popup from "../popup/popup";
import { validateInputs } from "../../services/utils/validation";
import "./timer.css";
import rotate from "../props/rotate-left.svg";
import Loader from "../loader/loader";

const Signup: React.FC<{}> = () => {
  const correctCode = "123456";
  const initialState: VerifyField = {
    timer: 0,
    code: Array(6).fill(""),
    error: { name: null, message: "", viewerror: "" },
    isExpired: false,
  };

  const {
    error,
    isLoading,
    userInfo,
    profiles,
    resendCode,
    setValidationError,
    verifyEmail,
  } = useAuth()!;

  const search = new URLSearchParams(window.location.search);
  const code = search.get("code")!;
  const emailquery = search.get("email")!;

  const [otp, setOtp] = useState(code);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [IsPopupOpen, setIsPopupOpen] = useState(false);
  const [IsPopupOpen2, setIsPopupOpen2] = useState(false);
  const [email, setEmail] = useState(emailquery);
  const [counter, setCounter] = useState(180);

  // Timer
  useEffect(() => {
    const timer =
      counter >= 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter / 60 === 0 && counter % 60 === 0) {
      dispatch({ type: "SETISEXPIREDTRUE" });
    }
    return () => clearInterval(timer as any);
  }, [counter]);
  // End of Timer

  // Verify Email
  const handleVerifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!otp) {
        dispatch({
          type: "SETERROR",
          payload: {
            name: "code",
            message: "Code is missing",
            viewerror: "Please enter a valid Code.",
          },
        });
      } else {
        dispatch({
          type: "SETERROR",
          payload: { name: null, message: "", viewerror: "" },
        });
      }
      // call the resetPassword API
      const verify = await verifyEmail(email, otp);
      console.log(verify);
      if (verify) {
        setIsPopupOpen2(true);
      }
      else {
        dispatch({
          type: 'SETERROR',
          payload: {
            name: 'code',
            message: 'Code is invalid',
            viewerror: 'Please try again.'
          }
        })
      }
    } catch (err) {
      console.error(error?.inputName);
    }
  };
  // End Verify Email

  // Resend Code
  const handleResend = async (e: ButtonEvent) => {
    try {
      e.preventDefault();

      // call the resetPassword API
      const resend = await resendCode(email);
      console.log(resend);
      if (resend) {
        setCounter(180);
        dispatch({ type: "SETISEXPIREDFALSE" });
      }
    } catch (err) {
      console.error(error?.inputName);
    }
  };
  // End Resend Code

  return (
    <div className="Wrapper row">
      <Background />
      <div
        className="col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 offset-xl-6 offset-lg-2  container  my-container "
        style={{ position: "relative", fontWeight: "400", zIndex: "2" }}
      >
        <fieldset
          id="isloading"
          disabled={isLoading}
          style={{ opacity: isLoading ? "0.1" : "1" }}
        >
          <div className="mb-5 ">
            <h3 className="welcome">Verify Email</h3>
          </div>
          <div>
            <h3 className="profiles-txt">
              Check your email. We have sent a 6-digit code to{" "}
              <button
                disabled={!(emailquery === null)}
                onClick={() => setIsPopupOpen(true)}
                style={{ background: "transparent" }}
              >
                <span
                  style={{
                    fontFamily: "Calibre-Semibold",
                    fontSize: "22px",
                    color: "#2e2e3a",
                    textDecoration: "underline",
                    marginRight: "10px",
                  }}
                >
                  {email}
                </span>
                <span hidden={!(emailquery === null)}>
                  <HiOutlinePencil />
                </span>
              </button>
              {/* <Timer dispatch={dispatch} onClick={handleResend}></Timer> */}
              {/* ------------- Timer ---------  */}
              <div className="mt-5">
                {counter > 0 ? (
                  <span className="codeworking">
                    {" "}
                    Code expires in: &nbsp;
                    <span style={{ fontFamily: "Calibre-Medium" }}>
                      {Math.floor(counter / 60) >= 10 ? (
                        Math.floor(counter / 60)
                      ) : (
                        <span>0{Math.floor(counter / 60)}</span>
                      )}
                      :{/* text not assignment   */}
                      {counter % 60 >= 10 ? (
                        counter % 60
                      ) : (
                        <span>0{counter % 60}</span>
                      )}
                    </span>
                  </span>
                ) : (
                  <span className="codeexpired">
                    Code has expired.
                    <button className="resendcode" onClick={handleResend}>
                      Resend code
                      <img
                        src={rotate}
                        style={{
                          width: "24px",
                          display: "inline-block",
                          marginLeft: "2px",
                        }}
                      ></img>
                    </button>
                  </span>
                )}
              </div>
            </h3>
          </div>
          <form
            className=""
            style={{ marginLeft: "0px" }}
            onSubmit={handleVerifyEmail}
          >
            <div className="form-group">
              <div>
                <OtpInput
                  numInputs={6}
                  value={otp}
                  onChange={setOtp}
                  isInputNum={true}
                  isDisabled={state.isExpired}
                  className="otp-form"
                  containerStyle={{
                    height: "100%",
                  }}
                  inputStyle={{
                    width: "100%",
                    backgroundColor: state.isExpired
                      ? "rgba(0,0,0,0.05)"
                      : "#fff",
                  }}
                  separator={<span></span>}
                />
              </div>
            </div>
            <button
              // onClick={e => handleSubmit(e)}
              type="submit"
              className="btn-login"
              style={{
                fontFamily: "Calibre-Semibold",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              Verify
            </button>

            {state.error.name !== null && (
              <div className="error-box2 mt-5">
                <img
                  src={WarningIcon}
                  alt="warning"
                  className="warning"
                  srcSet={`${WarningIcon2x} 2x, ${WarningIcon3x} 3x`}
                />

                <div>
                  <span className="strong">{state.error.message}</span> ,{" "}
                  <span className="light"> {state.error.viewerror}</span>
                </div>
              </div>
            )}
          </form>
          {IsPopupOpen && (
            <Popup
              content={
                <>
                  <div className="popup-medium-message mt-5">
                    Edit your email
                  </div>
                  <div className="popup-message">
                    Enter your email to send you a signup verification code
                  </div>
                  <div className="mt-5">
                    <label htmlFor="email" className="form-label myLabel">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={"form-control"}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="btn-login popup-btn"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    {" "}
                    Confirm
                  </button>
                </>
              }
              handleClose={(e) => setIsPopupOpen(!IsPopupOpen)}
            />
          )}
          {IsPopupOpen2 && (
            <Popup
              content={
                <>
                  <img src={tick} alt="tick" className="popup-tick" />
                  <div className="popup-bold"> Email Verified</div>
                  <div className="popup-message">
                    You have verified your email successfully
                  </div>
                  <Link to="/auth">
                    <button className="btn-login popup-btn">
                      Back to Login
                    </button>
                  </Link>
                </>
              }
              handleClose={(e) => setIsPopupOpen2(!IsPopupOpen2)}
            />
          )}
        </fieldset>
        {isLoading ? <Loader></Loader> : null}
      </div>
    </div>
  );
};

export default Signup;
