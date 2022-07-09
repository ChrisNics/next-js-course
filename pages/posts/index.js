import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta name="description" content="A list of all programming related tutorial and posts!" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
