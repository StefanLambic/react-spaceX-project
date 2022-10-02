const Post = ({ post }) => {
  return (
    <article className="container" key={post.mission_name}>
      <div className="container-items">
      <img className="post-image" src={post.links.mission_patch_small} alt={post.mission_name}></img>
      <h1>{`Mission name: ${post.mission_name}`}</h1>
      <h2>{`The rocket launch was in ${post.launch_year}`}</h2>
      <h2>{`Was mission successful? ${post.launch_success}`}</h2>
      <p className="details">{`Details about mission: ${post.details}`}</p>      
    </div>
    </article>
  )
}
export default Post