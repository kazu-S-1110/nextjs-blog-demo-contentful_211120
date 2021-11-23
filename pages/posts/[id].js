import { fetchEntries, getAllPostIds } from '../../lib/contentful';

export default function Post({ postData }) {
  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
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
