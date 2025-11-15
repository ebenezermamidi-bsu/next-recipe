'use client'
import { useFormState } from 'react-dom'
import PropTypes from 'prop-types'

export function Login({ loginAction }) {
  const [state, formAction] = useFormState(loginAction, {})

  return (
    <form action={formAction}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' required />
      </div>
      <br />
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required />
      </div>
      <br />
      <input type='submit' value='Login' />
      {state.error ? <strong>Error logging in : {state.error}</strong> : null}
    </form>
  )
}
Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
}
