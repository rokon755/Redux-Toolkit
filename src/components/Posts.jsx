import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../Features/posts/postsSlice";

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

    content = posts.slice(0, 4).map((post) => {
      return (
        <>
          <div key={post.id} className="bg-gray-100 rounded-md shadow-md p-5 w-[25%]">
            <h1 className="mb-5">{post.title}</h1 >
            <p>{post.body}</p >
          </div>
        </>
      )
    }
    )


  }

  return (
    <div className="pt-9 pb-15 text-center">
      <h1 className="text-4xl mb-5 font-bold">Redux Data fetch from JSON-Placeholder</h1>
      <div className="flex gap-3 w-5xl justify-center text-center m-auto">
        {content}
      </div>

    </div>
  )
}

export default Posts