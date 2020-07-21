/* eslint-disable require-jsdoc */
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

// Next渲染静态页面的回调函数，Return a list of possible value for id
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

// Next渲染静态页面的回调函数，Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
