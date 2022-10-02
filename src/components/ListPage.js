import Post from './Post'

const ListPage = ({ searchResults }) => {

  const results = searchResults.map(post => <Post key={post.mission_name}
    post={post} />)
  const content = results?.length ? results : <p className="text">No matching posts, start typing!</p>

  return (
    <main>{content}</main>
  )
}

export default ListPage