import { fetchEntries } from './contentful';

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
export async function getPostData(id) {
  const res = await fetchEntries();
  const postData = res.map((p) => {
    return p.fields;
  });

  return {
    id,
    ...postData,
  };
}
