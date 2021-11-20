import React from 'react';
import Head from 'next/head';
import { createClient, EntryCollection } from 'contentful';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const;

const index = () => {
  return <div></div>;
};

export default index;
