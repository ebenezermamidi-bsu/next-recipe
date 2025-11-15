import PropTypes from 'prop-types'

export function CreatePost({ createPostAction }) {
  return (
    <form action={createPostAction}>
      <div>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' name='title' required />
      </div>
      <br />
      <div>
        <label htmlFor='content'>Content:</label>
        <textarea id='content' name='content' required></textarea>
      </div>
      <br />
      <input type='submit' value='Create Post' />
    </form>
  )
}

CreatePost.propTypes = {
  createPostAction: PropTypes.func.isRequired,
}
