import React from 'react';
import * as contentful from 'contentful';

interface entryObj {
  title: string;
  createdAt: string;
  body: string;
}

const index = ({ title, createdAt, body }) => {
  return (
    <>
      <div>Hello</div>
      タイトル: {title}
      <br />
      作成日: {createdAt}
      <br />
      body: {body}
    </>
  );
};

export default index;

const config = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
};

index.getInitialProps = async (): Promise<entryObj> => {
  const client = contentful.createClient(config);

  const entryId = '3EBAmzacsEo0OJI9MnZwkd';
  const entry = await client.getEntry(entryId);
  return {
    title: entry.fields.title,
    createdAt: entry.sys.createdAt,
    body: entry.fields.body,
  };
};
