import fs from 'fs';
import path from 'path';

const checkImageCached = (resizedImageName: string): boolean => {
  if (!fs.existsSync(path.join(__dirname, '../../images/cached-images'))) {
    fs.mkdirSync(path.join(__dirname, '../../images/cached-images'))
  }
  const imgUrl = path.join(__dirname, `../../images/cached-images/${resizedImageName}.jpg`);
  try {
    fs.accessSync(imgUrl, fs.constants.R_OK);
    return true;
  } catch (err) {
    return false;
  }
};

export default checkImageCached;
