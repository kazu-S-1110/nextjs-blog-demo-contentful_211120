import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const fetchEntries = async () => {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
};
