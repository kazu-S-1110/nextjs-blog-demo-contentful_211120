import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';
import Date from '../../component/date';

export default function Post({ postData }) {
  const { title, image, body } = postData.fields;

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
      <Date dateString={postData.sys.createdAt} />
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
