import React from 'react'
import WifiLoader from '../wifi-loader/wifi'
import Logo from '../../assets/authentication/logo/Logo.png'
import Logo2x from '../../assets/authentication/logo/Logo@2x.png'
import Logo3x from '../../assets/authentication/logo/Logo@3x.png'
import './background.css'
import { useHistory } from 'react-router-dom'

const Background = () => {
  const history = useHistory();
  return (
    <div className='bg'>
      <button onClick={history.goBack} style={{background:'transparent', width:'100%'}}>
      <img
        src={Logo}
        alt='logo'
        className='logo'
        srcSet={`${Logo2x} 2x, ${Logo3x} 3x`}
      />
      </button>

      <WifiLoader />
    </div>
  )
}

export default Background
