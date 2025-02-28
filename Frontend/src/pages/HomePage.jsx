import {  Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postAtoms";

function HomePage() {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch("/api/posts/feeds");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
        }
        setPosts(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);
  return (
    <>

    {!loading && posts.length === 0 && <h1>Follow some uer to see the feeds</h1>}
      {loading && (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      )}

      {posts.map ((post) => [
        <Post key={post._id} post={post} postedBy={post.postedBy}/>
      ])}
    </>
  );
}

export default HomePage;
