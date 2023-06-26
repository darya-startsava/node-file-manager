import path from 'node:path';

const goToFolder = (currentWorkDirectory, newFolderPath) => {
  let folderPath;
  if (path.isAbsolute(newFolderPath)) {
    folderPath = newFolderPath;
  } else {
    folderPath = path.resolve(currentWorkDirectory, newFolderPath);
  }
  process.chdir(folderPath);
  return process.cwd();
};

export default goToFolder;
