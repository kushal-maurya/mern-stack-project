import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

function UserPage() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const [ loading, setLoading ] = useState(true);

  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch( `api/users/profile/${username}`);
        const data = await res.json();
        if(data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    }
    getUser();
  },[username, showToast])

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
      <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle={"Let's talk about threads."}/>
      <UserPost likes={100} replies={81} postImg="/post2.png" postTitle={"jbkd dfhbd f dfbdkj dkjbdf."}/>
      <UserPost likes={200} replies={41} postImg="/post3.png" postTitle={"Ldkfjnd dfjbo sjbofirbfv jroei."}/>
      <UserPost likes={500} replies={475} postTitle={"Lejrb fehfb jhbidj kdjb hreads."}/>
    </>
  );
}

export default UserPage;
