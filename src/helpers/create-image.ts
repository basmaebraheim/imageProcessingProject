import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const createImage = async (
  name: string,
  width: number,
  height: number,
  resizedImageName: string
): Promise<boolean> => {
  try {
    if (!fs.existsSync(path.join(__dirname, '../../images/cached-images'))) {
      fs.mkdirSync(path.join(__dirname, '../../images/cached-images'))
    }

    await sharp(path.join(__dirname, `../../images/${name}.jpg`))
      .resize(width, height, { fit: 'contain' })
      .toFile(path.join(__dirname, `../../images/cached-images/${resizedImageName}.jpg`));

    return true;
  } catch (err) {
    return false;
  }
};

export default createImage;
