import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import ForgotPassword from './forgotPassword'

const correctEmail = 'robot@gmail.com'

const typeIntoForm = ({
  email
}: {
  email: string
}): {
  emailInputElement: HTMLInputElement
} => {
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i
  }) as HTMLInputElement
  if (email) {
    userEvent.type(emailInputElement, email)
  }

  return {
    emailInputElement
  }
}

describe('Intial state', () => {
  test('inputs should be intially empty', () => {
    render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )
    const { emailInputElement } = typeIntoForm({
      email: ''
    })

    expect(emailInputElement.value).toBe('')
  })

  test('should be able to type an email', () => {
    render(
<BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    )
    const { emailInputElement } = typeIntoForm({
      email: correctEmail
    })

    expect(emailInputElement.value).toBe(correctEmail)
  })
})
