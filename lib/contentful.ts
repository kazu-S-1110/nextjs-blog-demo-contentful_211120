import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const fetchEntries = async () => {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
};

export const fetchEntry = async (id) => {
  const entry = await client.getEntry(id);
  if (entry) return entry;
};
