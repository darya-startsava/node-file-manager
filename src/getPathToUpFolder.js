import path from 'node:path';

const getPathToUpFolder = (oldPath) => {
  return path.resolve(path.join(oldPath, '../'));
};

export default getPathToUpFolder;