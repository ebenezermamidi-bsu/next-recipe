export function Login() {
  return (
    <form>
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
    </form>
  )
}
