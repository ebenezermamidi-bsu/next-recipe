import PropTypes from 'prop-types'
export function FullPost({ title, author, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <div>{content}</div>
      <br />
      <em>
        Written by <strong>{author.username}</strong>
      </em>
    </article>
  )
}
FullPost.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string,
}
