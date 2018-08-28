exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  console.log('plugin');
  // TODO: Create nodes here, by downloading data from API
  // const data = await fetch(REMOTE_API);

  // data.forEach(image => createNode(image));

  return;
};
