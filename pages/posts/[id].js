import { fetchEntries } from '../../lib/contentful';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Image } from 'next';

export default function Post({ postData }) {
  // console.log(postData);
  const { title, image, body } = postData.fields;
  console.log(image);
  return (
    <>
      <h1>{title}</h1>
      {/* <Image
        src={`http:${image.fields.file.url}`}
        alt={image.fields.description}
      /> */}
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

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
