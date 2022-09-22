import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import Signup from './signup'

const correctFirstName = 'omar'
const correctLastName = 'ali'
const correctEmail = 'robot@gmail.com'
const correctPassword = '1234569090'
const incorrectFirstName = 'omar1sdssds231322'
const incorrectLastName = 'ali12##'
const incorrectEmail = 'robot@gmail'
const incorrectPassword = '12345'

const typeIntoForm = ({
  firstName,
  lastName,
  email,
  password
}: {
  firstName: string
  lastName: string
  email: string
  password: string
}): {
  firstNameInputElement: HTMLInputElement
  lastNameInputElement: HTMLInputElement
  emailInputElement: HTMLInputElement
  passwordInputElement: HTMLInputElement
} => {
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i
  }) as HTMLInputElement
  const passwordInputElement = screen.getByLabelText(
    /Password/i
  ) as HTMLInputElement
  const firstNameInputElement = screen.getByLabelText(
    /First Name/i
  ) as HTMLInputElement
  const lastNameInputElement = screen.getByLabelText(
    /Last Name/i
  ) as HTMLInputElement

  if (email) {
    userEvent.type(emailInputElement, email)
  }
  if (password) {
    userEvent.type(passwordInputElement, password)
  }
  if (firstName) {
    userEvent.type(firstNameInputElement, firstName)
  }
  if (lastName) {
    userEvent.type(lastNameInputElement, lastName)
  }

  return {
    firstNameInputElement,
    lastNameInputElement,
    emailInputElement,
    passwordInputElement
  }
}

describe('Intial state', () => {
  test('inputs should be intially empty', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)
    const {
      firstNameInputElement,
      lastNameInputElement,
      emailInputElement,
      passwordInputElement
    } = typeIntoForm({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
    // assertion to check if the element is there
    expect(firstNameInputElement.value).toBe('')
    expect(lastNameInputElement.value).toBe('')
    expect(emailInputElement.value).toBe('')
    expect(passwordInputElement.value).toBe('')
  })

  test('should be able to type an email', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    const { emailInputElement } = typeIntoForm({
      firstName: '',
      lastName: '',
      email: 'robot@gmail.com',
      password: ''
    })

    expect(emailInputElement.value).toBe('robot@gmail.com')
  })
  test('should be able to type an first name', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    const { firstNameInputElement } = typeIntoForm({
      firstName: 'omar',
      lastName: '',
      email: '',
      password: ''
    })
    expect(firstNameInputElement.value).toBe('omar')
  })
  test('should be able to type a last name', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    const { lastNameInputElement } = typeIntoForm({
      firstName: '',
      lastName: 'ali',
      email: '',
      password: ''
    })

    expect(lastNameInputElement.value).toBe('ali')
  })

  test('should be able to type a password', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    const { passwordInputElement } = typeIntoForm({
      firstName: '',
      lastName: '',
      email: '',
      password: 'secret'
    })

    expect(passwordInputElement.value).toBe('secret')
  })
  test('should be able to type all fields', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    const {
      firstNameInputElement,
      lastNameInputElement,
      emailInputElement,
      passwordInputElement
    } = typeIntoForm({
      firstName: correctFirstName,
      lastName: correctLastName,
      email: correctEmail,
      password: correctPassword
    })

    expect(firstNameInputElement.value).toBe(correctFirstName)
    expect(lastNameInputElement.value).toBe(correctLastName)
    expect(emailInputElement.value).toBe(correctEmail)
    expect(passwordInputElement.value).toBe(correctPassword)
  })
})

describe('error messages', () => {
  test('type in an  incorrect first name', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)
    const{firstNameInputElement,lastNameInputElement,emailInputElement,passwordInputElement}=
    typeIntoForm({
      firstName: incorrectFirstName,
      lastName: correctLastName,
      email: correctEmail,
      password: correctPassword
    })

    const errorMessageElement = screen.queryByText(/Invalid First Name/i)
    
    expect(firstNameInputElement.value).toBe(incorrectFirstName)
    expect(lastNameInputElement.value).toBe(correctLastName)
    expect(emailInputElement.value).toBe(correctEmail)
    expect(passwordInputElement.value).toBe(correctPassword)

    expect(errorMessageElement).not.toBeInTheDocument()
    const submitButtonElment = screen.getByRole('button', { name: /sign up/i })

    userEvent.click(submitButtonElment)

    const errorMessageElementAgain = screen.queryByText(
      /Please enter a valid First Name/i
    )
    
    expect(errorMessageElementAgain).toBeInTheDocument()

  })
  test('type in an  incorrect last name', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    typeIntoForm({
      firstName: correctFirstName,
      lastName: incorrectLastName,
      email: correctEmail,
      password: correctPassword
    })

    const errorMessageElement = screen.queryByText(/last name is invalid/i)

    const submitButtonElment = screen.getByRole('button', { name: /sign up/i })
    expect(errorMessageElement).not.toBeInTheDocument()

    userEvent.click(submitButtonElment)
    const errorMessageElementAgain = screen.queryByText(/last name is invalid/i)
    // expect(errorMessageElementAgain).not.toBeInTheDocument()
  })
  test('type in an  incorrect email', () => {
    render(<BrowserRouter><Signup /></BrowserRouter>)

    typeIntoForm({
      firstName: correctFirstName,
      lastName: correctLastName,
      email: incorrectEmail,
      password: correctPassword
    })

    const errorMessageElement = screen.queryByText(/email is invalid/i)

    const submitButtonElment = screen.getByRole('button', { name: /sign up/i })
    expect(errorMessageElement).not.toBeInTheDocument()

    userEvent.click(submitButtonElment)
    const errorMessageElementAgain = screen.queryByText(
      /Please enter a valid Email/i
    )
    
    expect(errorMessageElementAgain).toBeInTheDocument()
  })
})
