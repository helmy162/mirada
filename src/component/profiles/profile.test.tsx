import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import Profiles from './profiles'

describe('Intial state', () => {
  test('try different email', () => {
    render(
      <BrowserRouter>
        <Profiles />
      </BrowserRouter>
    )

    expect(screen.queryByText(/Try a different email/i)).toBeInTheDocument()
  })
  test('hsbc', () => {
    render(
      <BrowserRouter>
        <Profiles />
      </BrowserRouter>
    )
    expect(screen.queryByText(/hsbc/i)).toBeInTheDocument()
  })
  test('etisalat', () => {
    render(
      <BrowserRouter>
        <Profiles />
      </BrowserRouter>
    )
    expect(screen.queryByText(/etisalat/i)).toBeInTheDocument()
  })
})
