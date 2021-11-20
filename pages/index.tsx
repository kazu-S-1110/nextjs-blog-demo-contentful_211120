import React from 'react';
import * as contentful from 'contentful';

const index = () => {
  return <div>Hello</div>;
};

export default index;

const config = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
};

(async () => {
  const client = contentful.createClient(config);

  const entryId = '3EBAmzacsEo0OJI9MnZwkd';
  const entry = await client.getEntry(entryId);
  console.log(entry); // 対象のEntry内容を取得できる
})();
