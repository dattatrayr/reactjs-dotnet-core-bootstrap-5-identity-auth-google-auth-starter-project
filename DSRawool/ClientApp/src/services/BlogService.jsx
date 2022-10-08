export const getBlogComments = async (blogId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/blogcomment/${blogId}`
  );
  return await response.json();
};

export default { getBlogComments };
