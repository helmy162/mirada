import React from 'react'
import Wrapper from './error.styles'
import { BiErrorCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

const Error = ({ type }: { type: number }) => {
  return (
    <Wrapper className='error-container container'>
      {type === 404 && (
        <>
          <BiErrorCircle className='icon' />
          <h1>Page Not Found</h1>
          <p>Sorry, but the page you were trying to view does not exist.</p>
        </>
      )}

      {type === 400 && (
        <>
          <FiSettings className='icon' />
          <h1>Bad Request</h1>
          <p>Sorry,This page isn't working at the moment.</p>
        </>
      )}
    </Wrapper>
  )
}

export default Error
