import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useGetUserProfile from "../hooks/useGetUserProfile";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postAtoms";

function UserPage() {
  const {user, loading} = useGetUserProfile();
  const { username } = useParams();
  const [ posts, setPosts ] = useRecoilState(postsAtom);
  const [ fetchingPosts, setFetchingPosts ] = useState(true);

  const showToast = useShowToast();

  useEffect(() => {
    const getPosts = async () => {
      if (!user) return;
      setFetchingPosts(true);
      try {
        const res = await fetch(`api/posts/user/${username}`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        showToast("Error", error, "error");
        setPosts([]);
      } finally {
        setFetchingPosts(false);
      }
    }

    getPosts();

  },[username, showToast, setPosts, user])
  console.log("post is here and it is recoil state", posts)
  
  if(!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size="xl"/>
      </Flex>
    )
  }

  if(!user && !loading) return <h1>User Not Found</h1>;
  return (
    <>
      <UserHeader  user={user}/>

      {!fetchingPosts && posts.length === 0 && <h1>User has not posts</h1> }
      {fetchingPosts && (
        <Flex  justifyContent={"center"} my={12}>
          <Spinner size={"xl"}/>
        </Flex>
      )}

      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  );
}

export default UserPage;
