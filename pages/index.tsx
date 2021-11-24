import React from 'react';
import Link from 'next/link';
import { fetchEntries } from '../lib/contentful';
import { getAllPostData } from '../lib/posts';

const index = ({ posts }) => {
  return (
    <>
      <ul>
        {posts.map((p) => {
          return (
            <li key={p.sys.id}>
              <Link href={`/posts/${p.sys.id}`} passHref>
                <h2>{p.fields.title}</h2>
              </Link>
              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const posts = await getAllPostData();
  return {
    props: {
      posts,
    },
  };
};
