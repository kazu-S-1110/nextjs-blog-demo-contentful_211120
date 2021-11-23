import { fetchEntries } from '../../lib/contentful';
import { getAllPostIds } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <>
      <h1>Hello, Next</h1>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async () => {
  const res = await fetchEntries();
  const postData = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      postData,
    },
  };
};
