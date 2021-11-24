import React from 'react';
import Link from 'next/link';
import { fetchEntries } from '../lib/contentful';

const index = ({ posts }) => {
  return (
    <>
      {posts.map((p) => {
        return (
          <>
            <Link href={`/posts/${p.sys.id}`} key={p.sys.id} passHref>
              <h2>{p.fields.title}</h2>
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetchEntries();
  const posts = res.map((p) => {
    return p;
  });

  return {
    props: {
      posts,
    },
  };
};
