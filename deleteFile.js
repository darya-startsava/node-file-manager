import { rm } from 'node:fs/promises';

const deleteFile = async (pathToFile) => {
  await rm(pathToFile);
};

export default deleteFile;