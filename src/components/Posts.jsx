import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../ReduxItem/Features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(state => state.posts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])


  //Decide what to render
  let content;

  if (isLoading) {
    content = <h1>Loading posts...</h1>
  }

  if (!isLoading && isError) {
    content = <h1>{error}</h1>
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Posts Found</h1>
  }

  if (!isLoading && !isError && posts.length > 0) {

    content = posts.slice(0, 8).map((post) => {
      return (
        <li key={post.id} > {post.title}</li >
      )
    }
    )


  }

  return (
    <div>
      <h1>Redux Data fetch from JSON-placeholder</h1>
      <ul>
        {content}
      </ul>

    </div>
  )
}

export default Posts