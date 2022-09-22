import './profiles.css';
import { Link } from "react-router-dom"
import {  ButtonEvent } from './types'
// import Wrapper from './signin.styles'
import Background from '../authenticationBackground/background'
import HSBC from '../props/HSBC.png'
import etisalat from '../props/Etisalat.png'
import arrow from '../props/arrow.png'
import add from '../props/add.svg'
import { useAuth } from '../../context'


const Profiles: React.FC<{}> = () => {

  const { userInfo } = useAuth()!;
  console.log(userInfo);

  const handleSubmit = (e: ButtonEvent) => {
    e.preventDefault()
  }

  return (
    <div className='Wrapper row'>
      <Background />
      <div className="col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 offset-xl-6 offset-lg-2  container  my-container " style={{position:'relative',  fontWeight:'400', zIndex:'2', paddingTop:'92px'}}>
        <div><h3  className='welcome'>Welcome Back to Hoopoe!</h3></div>
        <div className='signedin-email mb-5'>  rose.fuller@mail.com</div>
        <div className='profiles-txt mb-3'>  Profiles associated with your email</div>
        <div className='profile row mb-4'>
          <div className='col-3 profile-logo'>
            <img src={HSBC} alt='HSBC Logo'></img>
          </div>
          <div className='col-sm-6 col-5 offset-1'>
            <div className='row profile-name'> HSBC </div>
            <div className='row profile-position' > &#40;Branch Manager&#41;</div>
          </div>
          <div className='col-2 profile-logo' style={{fontSize:'24px'}}> <a href="#"><img src={arrow} alt="arrow" style={{width:'24px'}}/></a></div>
        </div>
        
        <div className='profile row mb-4'>
          <div className='col-3 profile-logo'>
            <img src={etisalat} alt='Etisalat Logo'></img>
          </div>
          <div className='col-sm-6 col-5 offset-1'>
            <div className='row profile-name'> Etisalat </div>
            <div className='row profile-position' > &#40;Admin&#41;</div>
          </div>
          <div className='col-2 profile-logo' style={{fontSize:'24px'}}> <a href="#"><img src={arrow} alt="arrow" style={{width:'24px'}}/></a></div>
        </div>
        
        <div className='profile row mb-4'>
          <div className='col-12 mb-3' style={{fontFamily:'Calibre', fontSize:'18px'}}>Invited by: barbara.ford@mail.com</div>
          
            <div className='col-3 profile-logo'>
              <img src={etisalat} alt='Etisalat Logo' style={{width:'55px'}}></img>
            </div>
            <div className='col-sm-8 col-6 offset-1'>
              <div className='row profile-name'> Etisalat </div>
              <div className='row profile-position' > &#40;Agent&#41;</div>
            </div>
            <div><hr /></div>
              <div className='col-10 ' style={{fontFamily:'Calibre-Medium', fontSize:'24px', fontWeight:'500', color:'#000000'}}> Accept invitation & Launch Profile</div>
              <div className='col-2 profile-logo' style={{fontSize:'24px'}}> <a href="#"><img src={arrow} alt="arrow" style={{width:'24px'}}/></a></div>
          
        </div>

        <p className='dont-see'style={{fontSize:'18px', fontFamily:'Calibre-Medium', fontWeight:'500', marginTop:'30px', color:'#333333', textAlign:'center'}}> Not seeing your organization?   <Link to="/auth/" style={{textDecoration:'none', color:'#0087c7'}} > Try a different email</Link></p>
        <div className="mb-3">
              <p className="lined-or"> OR </p>
        </div>
        <div>
        <p className='new-organization'> Want to create new organization profile with same email?    </p>
        <p className='new-organization' style={{marginTop:'0px'}}><Link to="/auth/" style={{textDecoration:'none', color:'#0087c7'}} > <img src={add} alt="" style={{width:'23px', display:'inline-block'}}/> Create new organization</Link></p>
        </div>
      </div>
    </div>
    
  )
}

export default Profiles;
