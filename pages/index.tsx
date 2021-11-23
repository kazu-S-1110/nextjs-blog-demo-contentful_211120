import React from 'react';
import { Post } from '../component/Post';
import { fetchEntries } from '../lib/contentful';
import { getPostData } from '../lib/posts';

const index = ({ posts }) => {
  return (
    <>
      {posts.map((p) => {
        return (
          <Post
            key={p.date}
            date={p.date}
            image={p.image.fields}
            body={p.body}
            title={p.title}
          />
        );
      })}
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
};

getPostData();
