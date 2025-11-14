import PropTypes from 'prop-types'
export function FullPost({ title, author, contents }) {
  return (
    <article>
      <h2>{title}</h2>
      <div>{contents}</div>
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
  contents: PropTypes.string,
}
