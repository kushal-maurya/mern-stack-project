import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle={"Let's talk about threads."}/>
      <UserPost likes={100} replies={81} postImg="/post2.png" postTitle={"jbkd dfhbd f dfbdkj dkjbdf."}/>
      <UserPost likes={200} replies={41} postImg="/post3.png" postTitle={"Ldkfjnd dfjbo sjbofirbfv jroei."}/>
      <UserPost likes={500} replies={475} postTitle={"Lejrb fehfb jhbidj kdjb hreads."}/>
    </>
  );
}

export default UserPage;
