import { fetchEntries } from '../../lib/contentful';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';

export default function Post({ postData }) {
  // console.log(postData);
  const { title, image, body } = postData.fields;
  console.log(image.fields.file.url);
  return (
    <>
      <h1>{title}</h1>
      <Image
        src={`http:${image.fields.file.url}`}
        alt={image.fields.description}
        width="300"
        height="400"
        objectFit="contain"
      />
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
