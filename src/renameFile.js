import fsPromises from 'node:fs/promises';
import { dirname, join } from 'node:path';

const renameFile = async (currentFilePath, newFileName) => {
  const newFilePath = join(dirname(currentFilePath), newFileName);

  const isNewFilePath = await fsPromises.access(newFilePath, fsPromises.constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (isNewFilePath) {
    throw new Error();
  }
  try {
    await fsPromises.rename(currentFilePath, newFilePath);
  } catch {
    throw new Error();
  }

};


export default renameFile;