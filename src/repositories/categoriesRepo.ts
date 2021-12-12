// call logic
//remove 2 links from the end of api. TODOOOOO

import getPosts from '../apiController/categoriesApi';

export const getCategoriesRepo = async () => {
  const data = await getPosts();

  return data;
};
