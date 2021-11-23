import { fetchEntries, fetchEntry } from './contentful';

export async function getAllPostIds() {
  const res = await fetchEntries();
  const Ids = res.map((p) => {
    return p.sys.id;
  });
  return Ids.map((id) => {
    return {
      params: {
        id: id,
      },
    };
  });
}

export const getPostData = async (id) => {
  const res = await fetchEntry(id);
  return {
    id,
    ...res,
  };
};
