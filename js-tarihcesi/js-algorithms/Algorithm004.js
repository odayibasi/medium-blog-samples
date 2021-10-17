function TreeNode(id, name) {
  return { id, name, children: [] };
}

const findParentNodeAndAdd = (node, parentDirPath, fileOrDirName, path) => {
  if (parentDirPath === '') {
    node.children.push(TreeNode(path, fileOrDirName));
  } else {
    node.children.forEach((child) => {
      if (child.id === parentDirPath) {
        child.children.push(TreeNode(path, fileOrDirName));
      } else {
        findParentNodeAndAdd(child, parentDirPath, fileOrDirName, path);
      }
    });
  }
};

const hierarchicalItems = (data) => {
  const rootNode = TreeNode('root', 'Root');

  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    const pathItems = el.split('/');
    const fileOrDirName = pathItems[pathItems.length - 1];
    const parentDirPath =
      pathItems.length > 1 ? el.replace('/' + fileOrDirName, '') : '';
    findParentNodeAndAdd(rootNode, parentDirPath, fileOrDirName, el);
  }
  return rootNode;
};

const files = ['aaa', 'aaa/bbb', 'aaa/bbb/ccc', 'aaa/bbb/xxx'];
console.log(hierarchicalItems(files));
