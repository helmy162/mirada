import React, { useState, useRef, useEffect } from "react";
import './resetPassword.css';
import Background from "../authenticationBackground/background";
import { ButtonEvent, errorTypes } from '../forgot-password/types'
import { Link } from 'react-router-dom'
import Popup from '../popup/popup'
import WarningIcon from '../../assets/authentication/warning-icon/warning.png'
import WarningIcon2x from '../../assets/authentication/warning-icon/warning@2x.png'
import WarningIcon3x from '../../assets/authentication/warning-icon/warning.png'
import tick from '../props/tick.png'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import PasswordChecklist from "react-password-checklist";
import check from "../props/check.svg";
import closex from "../props/x.svg";
import { useAuth } from "../../context";
import { validateInputs } from "../../services/utils/validation";
import Loader from "../loader/loader";

const ResetPassword: React.FC<{}> = () => {

  const errorBox = useRef<null | HTMLDivElement>(null);
  const [IsPopupOpen, setIsPopupOpen] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(Boolean);
  const [passwordToggle2, setPasswordToggle2] = useState(Boolean);
  const [isStrong, setIsStrong] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const search = new URLSearchParams(window.location.search);
  const token = search.get('token')!;
  
  const { error, isLoading, userInfo, profiles, resetPassword, setValidationError, validateToken } = useAuth()!;

  const [formValues, setFormValues] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: "", confirmPassword: "" });

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target;
    setFormValues((ps) => ({
      ...ps,
      [name]: value,
    }));
  };

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const email = await validateToken(token);
      if (email === false ){
        return setValidationError({inputName:'', message:'Invalid Token', hint:'Please Request a new reset link'});
      }
    }
    // call the function
    fetchData()
      // catch errors
      .catch(console.error);
  }, [])
  
  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // validate the inputs
      const form = Object.entries(formValues).map((i) => ({
        name: i[0],
        value: i[1],
      }));
      const validationErrors = validateInputs(form);
      if (validationErrors.length) return setValidationError(validationErrors[0]); 
        // call the resetPassword API
      const isReset = await resetPassword(formValues.password);
      console.log(isReset);
      if (isReset) {
        setIsPopupOpen(true);
        console.log("Successfully reset")
      }
    } catch (err) {
      console.log("10");
      console.error(error?.inputName);
    }
  };

  useEffect(() => {
    if (!error) return;
    else errorBox.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [error]);

  return (
    <div className='Wrapper row'>
      <Background />
      <div
        className='col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 offset-xl-6 offset-lg-2  container  my-container '
        style={{ position: 'relative', fontWeight: '400', zIndex: '2' }}
      >
        <fieldset
            id="isloading"
            disabled={isLoading}
            style={{ opacity: isLoading ? "0.1" : "1" }}
          >
          <div className='mb-4 '>
            <h3 className='welcome'>Reset Password</h3>
          </div>
          <div className='profiles-txt mb-4'>
          Must include at least one symbol or a number and have 
          at least 8 characters.
          </div>
          <form
            id='auth-form'
            onSubmit={handleResetPassword}
          >
            <div className='mb-3'>
              <label htmlFor='password' className='form-label myLabel'>
                Password
              </label>
              <input
                type={passwordToggle ? "text" : "password"}
                id='password'
                name='password'
                className={
                  'form-control'
                }
                value={formValues?.password || ""}
                onChange={handleChange}
              />
              <button
                  className="eye"
                  type="button"
                  onClick={() => setPasswordToggle(!passwordToggle)}
                >
                  {passwordToggle === false ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
              {/* Password Checker  */}
                <PasswordChecklist
                rules={["minLength","specialChar","number","capital"]}
                minLength={8}
                value={formValues?.password || ""}
                onChange={(isValid) => {setIsStrong(isValid)}}
                className="strength"
                style={ formValues?.password  && !isStrong?{"display": "block"}:{"display": "none"}}
                iconComponents={{ValidIcon: <img src={check} style={{width:'16px', marginRight:'10px'}} />, InvalidIcon: <img src={closex} style={{width:'16px', marginRight:'10px'}} />}}
                />
                {/* Password strngth:strong  */}
                <PasswordChecklist
                rules={["number"]}
                value={formValues?.password || ""}
                messages={{number:"Password strength: strong"}}
                className="strength"
                style={{color: isStrong?"#56c596":"#db0011", display: formValues?.password  && isStrong?"block":"none"}}
                iconComponents={{ValidIcon: <img src={check} style={{width:'16px', marginRight:'10px'}} />, InvalidIcon: <img src={closex} style={{width:'16px', marginRight:'10px'}} />}}
                />            
            </div>
            <div className='mb-3'>
              <label htmlFor='confirmPassword' className='form-label myLabel'>
                Confirm Password
              </label>
              <input
                type={passwordToggle2 ? "text" : "password"}
                id='confirmPassword'
                name='confirmPassword'
                className='form-control'
                value={formValues?.confirmPassword || "" }
                onChange={handleChange}
              />
              <button
                  className="eye"
                  type="button"
                  onClick={() => setPasswordToggle2(!passwordToggle2)}
                >
                  {passwordToggle2 === false ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
                {/* Check Password Match  */}
                {
                isStrong?
                <PasswordChecklist
                rules={["match"]}
                value={formValues?.password}
                valueAgain={formValues?.confirmPassword}
                onChange={(isValid) => {setIsMatch(isValid)}}
                messages={isMatch? {match:"Passwords match"}: {match:"Passwords don't match"}}
                className="strength"
                style={{color: isMatch?"#56c596":"#db0011"}}
                iconComponents={{ValidIcon: <img src={check} style={{width:'16px', marginRight:'10px'}} />, InvalidIcon: <img src={closex} style={{width:'16px', marginRight:'10px'}} />}}
                />
              :
              null
              }
                
            </div>
            <div className=''>
              <button
                // onClick={handleResetPassword}
                disabled={!isStrong || !isMatch}
                className='btn-login'
                style={{
                  fontFamily: 'Calibre-Semibold',
                  fontSize: '22px',
                  fontWeight: '600',
                  marginBottom: '42px',
                  marginTop: '80px'
                }}
              >
                Reset Password
              </button>
            </div>
            <Link
              to='/auth'
              className='form-label loginwith '
              style={{
                fontSize: '20px',
                fontWeight: '500',
                fontFamily: 'Calibre-Medium'
              }}
            >
              <div style={{ textAlign: 'center' }}>Back</div>{' '}
            </Link>
            {error !== null && (
                <div className="error-box2 mt-1" ref={errorBox}>
                  <img
                    src={WarningIcon}
                    alt="warning"
                    className="warning"
                    srcSet={`${WarningIcon2x} 2x, ${WarningIcon3x} 3x`}
                  />
                  <div>
                    <span className="strong">{error?.message}</span>,{" "}
                    <span className="light">{error?.hint} </span>
                  </div>
                </div>
              )}
          </form>
          {IsPopupOpen && (
            <Popup
              noclose= {true}
              content={
                <>
                  <img src={tick} alt='tick' className='popup-tick' />
                  <div className='popup-bold'> Password Set</div>
                  <div className='popup-message'>
                  You have updated your password successfully
                  </div>
                  <Link to='/auth'>
                    <button className='btn-login popup-btn'>
                      {' '}
                      Back to Login
                    </button>
                  </Link>
                </>
              }
              handleClose={e => setIsPopupOpen(!IsPopupOpen)}
            />
          )}
        </fieldset>
        {isLoading ? <Loader></Loader> : null}
      </div>
    </div>
  )
}

export default ResetPassword
