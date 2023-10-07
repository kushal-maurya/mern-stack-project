import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Actions from "../components/Actions";
// import { useEffect } from "react";
import { useState } from "react";
// import Comment from "../components/Comment";
import { BsThreeDots } from "react-icons/bs";
import Comment from "../components/Comment";
// import useGetUserProfile from "../hooks/useGetUserProfile";
// import useShowToast from "../hooks/useShowToast";
// import { useNavigate, useParams } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
// import { useRecoilState, useRecoilValue } from "recoil";
// import userAtom from "../atoms/userAtom";
// import { DeleteIcon } from "@chakra-ui/icons";
// import postsAtom from "../atoms/postsAtom";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  // const { user, loading } = useGetUserProfile();
  // const [posts, setPosts] = useRecoilState(postsAtom);
  // const showToast = useShowToast();
  // const { pid } = useParams();
  // const currentUser = useRecoilValue(userAtom);
  // const navigate = useNavigate();

  // const currentPost = posts[0];

  // useEffect(() => {
  // 	const getPost = async () => {
  // 		setPosts([]);
  // 		try {
  // 			const res = await fetch(`/api/posts/${pid}`);
  // 			const data = await res.json();
  // 			if (data.error) {
  // 				showToast("Error", data.error, "error");
  // 				return;
  // 			}
  // 			setPosts([data]);
  // 		} catch (error) {
  // 			showToast("Error", error.message, "error");
  // 		}
  // 	};
  // 	getPost();
  // }, [showToast, pid, setPosts]);

  // const handleDeletePost = async () => {
  // 	try {
  // 		if (!window.confirm("Are you sure you want to delete this post?")) return;

  // 		const res = await fetch(`/api/posts/${currentPost._id}`, {
  // 			method: "DELETE",
  // 		});
  // 		const data = await res.json();
  // 		if (data.error) {
  // 			showToast("Error", data.error, "error");
  // 			return;
  // 		}
  // 		showToast("Success", "Post deleted", "success");
  // 		navigate(`/${user.username}`);
  // 	} catch (error) {
  // 		showToast("Error", error.message, "error");
  // 	}
  // };

  // if (!user && loading) {
  // 	return (
  // 		<Flex justifyContent={"center"}>
  // 			<Spinner size={"xl"} />
  // 		</Flex>
  // 	);
  // }

  // if (!currentPost) return null;
  // console.log("currentPost", currentPost);

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            {/* {formatDistanceToNow(new Date(currentPost.createdAt))} ago */}
            1d
          </Text>

          {/* {currentUser?._id === user._id && (
						<DeleteIcon size={20} cursor={"pointer"} onClick={handleDeletePost} />
					)} */}
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let&apos;s talk about post</Text>

      {/* {currentPost.img && ( */}
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>
      {/* )} */}

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize="sm">
          123 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize="sm">
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      {/* </Flex>/ */}

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      <Comment
        Comment="Looks really good!"
        createdAt="2d"
        likes={100}
        username="johndoe"
        userAvatar="https://bit.ly/dan-abramov"
      />

      <Comment
        Comment="fdcn ds hi there !"
        createdAt="2d"
        likes={30}
        username="ramesh"
        userAvatar="https://bit.ly/dan-abramov"
      />

      <Comment
        Comment="hey my manme is !"
        createdAt="2d"
        likes={12}
        username="pushpa"
        userAvatar="https://bit.ly/code-beast"
      />

      <Comment
        Comment="nice looksinf fdjbfkdj "
        createdAt="2d"
        likes={65}
        username="sumit"
        userAvatar="https://bit.ly/sage-abebayo"
      />
    </>
  );
};

export default PostPage;
