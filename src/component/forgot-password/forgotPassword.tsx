import './forgot-password.css'
import React, { useState, useRef, useEffect } from "react";
import { validateEmail } from '../../services/utils/validation'
import { ButtonEvent, errorTypes } from './types'
import { Link, useHistory } from "react-router-dom";
import WarningIcon from '../../assets/authentication/warning-icon/warning.png'
import WarningIcon2x from '../../assets/authentication/warning-icon/warning@2x.png'
import WarningIcon3x from '../../assets/authentication/warning-icon/warning.png'
import Background from '../authenticationBackground/background'
import Popup from '../popup/popup'
import tick from '../props/tick.png'
import { useAuth } from "../../context";
import { validateInputs } from "../../services/utils/validation";
import Loader from '../loader/loader'

const Forgotpassword: React.FC<{}> = () => {
  const { error, isLoading, userInfo, profiles, forgotPassword, setValidationError } =
    useAuth()!;
  const [IsPopupOpen, setIsPopupOpen] = useState(false);
  const [formValues, setFormValues] = useState<{
    email: string;
  }>({ email: ""});

  const emailInput = document.getElementById("email")!;

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target;
    setFormValues((ps) => ({
      ...ps,
      [name]: value,
    }));
  };

  const handleResetLink = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // validate the inputs
      const form = Object.entries(formValues).map((i) => ({
        name: i[0],
        value: i[1],
      }));
      const validationErrors = validateInputs(form);
      if (validationErrors.length)
        return setValidationError(validationErrors[0]);

      // call the ForgotPassword API
      const nextPage = await forgotPassword(formValues.email);
      console.log({ nextPage });
      if(!nextPage) throw new Error('Invalid Email');
      else {
        console.info("Successfully logged in", userInfo, profiles);
        setIsPopupOpen(!IsPopupOpen);
      }
    } catch (err) {
      console.error(error?.inputName);
    }
  }
  useEffect(() => {
    if (!error) emailInput?.classList?.remove("error-border", "text-danger");
    else if (error?.inputName === "email") emailInput?.classList.add("error-border", "text-danger");
  }, [error]);
  

  return (
    <div className='Wrapper row'>
      <Background />
      <div
        className='col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 offset-xl-6 offset-lg-2  container  my-container '
        style={{ position: 'relative', fontWeight: '400', zIndex: '2' }}
      >
        <div className='mb-4 '>
          <h3 className='welcome'>Forgot Password?</h3>
        </div>
        <div className='profiles-txt mb-4'>
          Enter the email associated with your account to receive a reset
          password link.
        </div>
        <fieldset
          id="isloading"
          disabled={isLoading}
          style={{ opacity: isLoading ? "0.1" : "1" }}
        >
        <form id='auth-form' onSubmit={handleResetLink}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label myLabel'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={'form-control'}
              value={formValues?.email || ""}
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className=''>
            <button
              className='btn-login'
              style={{
                fontFamily: 'Calibre-Semibold',
                fontSize: '22px',
                fontWeight: '600',
                marginBottom: '42px',
                marginTop: '80px'
              }}
            >
              Send Reset Link
            </button>
          </div>
          
            <div  style={{ textAlign: 'center' }}>
              <Link
              to='/auth'
              className='back-btn'
              style={{
                fontSize: '20px',
                fontWeight: '500',
                fontFamily: 'Calibre-Medium'
              }}
              >
                Back
              </Link>
            </div>
          
          {error!== null && (
            <div className='error-box2 mt-1'>
              <img
                src={WarningIcon}
                alt='warning'
                className='warning'
                srcSet={`${WarningIcon2x} 2x, ${WarningIcon3x} 3x`}
              />
              <div>
                <span className="strong">{error.message}</span>,{" "}
                <span className="light">{error.hint} </span>
              </div>
            </div>
          )}{' '}
        </form>
        </fieldset>
        {isLoading ? <Loader></Loader> : null}
        {IsPopupOpen && (
          <Popup
            content={
              <>
                <img src={tick} alt='tick' className='popup-tick' />
                <div className='popup-bold'> Reset Link Sent</div>
                <div className='popup-message'>
                A password reset email has been sent to {formValues.email}
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
      </div>
    </div>
  )
}

export default Forgotpassword
