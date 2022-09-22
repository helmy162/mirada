import { useEffect, useRef, useState } from 'react'
import { validateInputs } from '../../services/utils/validation'
import { SignupField } from './types'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import ThirdParty from '../signin/ThirdParty'
import Terms from './terms'
import { Link, useHistory } from 'react-router-dom'
import Background from '../authenticationBackground/background'
import WarningIcon from '../../assets/authentication/warning-icon/warning.png'
import WarningIcon2x from '../../assets/authentication/warning-icon/warning@2x.png'
import WarningIcon3x from '../../assets/authentication/warning-icon/warning.png'
import Loader from '../loader/loader'

import { useAuth } from '../../context/index'

const Signup: React.FC<{}> = () => {

 
  // call useHistory for routing
  const history = useHistory()

  // get wanted value from the Context API
  const {
    error,
    isLoading,
    userInfo,
    profiles,
    createAccount,
    setValidationError
  } = useAuth()!

  // define input references
  const errorBox = useRef<null | HTMLDivElement>(null)
  const firstNameInput = document.getElementById('firstName')!
  const lastNameInput = document.getElementById('lastName')!
  const emailInput = document.getElementById('email')!
  const passwordInput = document.getElementById('password')!

  // initiate component states
  const [formValues, setFormValues] = useState<SignupField>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [passwordToggle, setPasswordToggle] = useState(Boolean)

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target
    console.log({ name, value })
    setFormValues(ps => ({
      ...ps,
      [name]: value
    }))
  }

  // handle input changes
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      // validate the inputs
      const form = Object.entries(formValues).map(i => ({
        name: i[0],
        value: i[1]
      }))
      const validationErrors = validateInputs(form)
      if (validationErrors.length)
        return setValidationError(validationErrors[0])

      // call the createAccount API
      const nextPage = await createAccount(
        formValues.firstName,
        formValues.lastName,
        formValues.email,
        formValues.password
      )
      console.log({ nextPage })
      if (!nextPage) throw new Error('Invalid email or password')
      if (nextPage === 'verify') return history.push('/auth/verify-account?email='+formValues.email)
      if (nextPage === 'profiles') return history.push('/auth/profiles')
      if (nextPage === 'dashboard') {
        console.info('Successfully signed up', userInfo, profiles)
        // should invoke the callback function of the parent Project
      }
    } catch (err) {
      console.error(error?.inputName)
    }
  }

  // Handle input field style when there are errors
  useEffect(() => {
    if (!error){
      return
    }
    else if (error?.inputName === 'firstName') {
      firstNameInput.classList.add('error-border', 'text-danger')
      lastNameInput?.classList?.remove('error-border', 'text-danger')
      emailInput?.classList?.remove('error-border', 'text-danger')
      passwordInput?.classList?.remove('error-border', 'text-danger')
    } else if (error?.inputName === 'lastName') {
      firstNameInput?.classList?.remove('error-border', 'text-danger')
      lastNameInput.classList.add('error-border', 'text-danger')
      emailInput?.classList?.remove('error-border', 'text-danger')
      passwordInput?.classList?.remove('error-border', 'text-danger')
    }
    else if (error?.inputName === 'email') {
      firstNameInput?.classList?.remove('error-border', 'text-danger')
      lastNameInput?.classList?.remove('error-border', 'text-danger')
      emailInput.classList.add('error-border', 'text-danger')
      passwordInput?.classList?.remove('error-border', 'text-danger')
    } else if (error?.inputName === 'password') {
      firstNameInput?.classList?.remove('error-border', 'text-danger')
      lastNameInput?.classList?.remove('error-border', 'text-danger')
      emailInput?.classList?.remove('error-border', 'text-danger')
      passwordInput.classList.add('error-border', 'text-danger')
    }
    else{
      firstNameInput?.classList?.remove('error-border', 'text-danger')
      lastNameInput?.classList?.remove('error-border', 'text-danger')
      emailInput?.classList?.remove('error-border', 'text-danger')
      passwordInput?.classList?.remove('error-border', 'text-danger')
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <div className='Wrapper row'>
      <Background />
      <div
        className='col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 offset-xl-6 offset-lg-2  container  my-container '
        style={{ position: 'relative', fontWeight: '400', zIndex: '2' , paddingTop:'83.5px'}}
      >
        <fieldset
          id='isloading'
          disabled={isLoading}
          style={{ opacity: isLoading ? '0.1' : '1' }}
        >
          <div className='mb-0'>
            <h3 className='welcome'>Get Started with Hoopoe</h3>
          </div>
          <div>
            <h5 className='profiles-txt mb-4'>
              It's free ! No credit card is required
            </h5>
          </div>
          <form className='auth-form' onSubmit={handleSubmit}>
            <div className=' row mb-2'>
              <div className=' col-6' style={{ margin: '0px' }}>
                <label htmlFor='firstName' className='myLabel'>
                  First Name
                </label>
                <input
                  type='text'
                  className='form-control '
                  id='firstName'
                  name='firstName'
                  value={formValues?.firstName || ''}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className='col-6' style={{ margin: '0px' }}>
                <label htmlFor='lastName' className='myLabel'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='form-control '
                  id='lastName'
                  name='lastName'
                  value={formValues?.lastName || ''}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className='mb-2' style={{ marginTop: '0px' }}>
              <label htmlFor='email' className='myLabel'>
                Email
              </label>
              <div className='eye-pass'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  aria-describedby='emailHelp'
                  value={formValues?.email || ''}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password' className='myLabel'>
                  Password
                </label>
                <input
                  type={passwordToggle ? 'text' : 'password'}
                  className='form-control'
                  id='password'
                  name='password'
                  value={formValues?.password || ''}
                  onChange={handleChange}
                  required={true}
                          />
                {!passwordToggle && (
                  <button
                    className='eye'
                    onClick={() => setPasswordToggle(ps => !ps)}
                  >
                    <FaRegEyeSlash />
                  </button>
                )}
                {passwordToggle && (
                  <button
                    className='eye'
                    onClick={() => setPasswordToggle(ps => !ps)}
                  >
                    <FaRegEye />
                  </button>
                )}
              </div>
            </div>
            <button
                type="submit"
                className="btn-login"
                style={{
                  fontFamily: "Calibre-Semibold",
                  fontSize: "22px",
                  fontWeight: "600",
                }}
              >
              Sign Up
            </button>
            <Terms />
            <div className='mb-3'>
              <p className='lined-or'> OR </p>
            </div>
            <ThirdParty />
            <p
              className='dont-have'
              style={{
                fontSize: '18px',
                fontFamily: 'Calibre-Semibold',
                fontWeight: '500',
                marginTop: '30px'
              }}
            >
              {' '}
              Already have an account?{' '}
              <Link
                to='/auth'
                style={{ textDecoration: 'none', color: '#0087c7' }}
              >
                {' '}
                Log in
              </Link>
            </p>
            {error !== null && (
              <div className='error-box2 mt-1' ref={errorBox}>
                <img
                  src={WarningIcon}
                  alt='warning'
                  className='warning'
                  srcSet={`${WarningIcon2x} 2x, ${WarningIcon3x} 3x`}
                />

                <div>
                  <span className='strong'>{error.message}</span> ,{' '}
                  <span className='light'>{error.hint}</span>
                </div>
              </div>
            )}
          </form>
        </fieldset>
        {isLoading ? <Loader></Loader> : null}
      </div>
    </div>
  )
}

export default Signup
