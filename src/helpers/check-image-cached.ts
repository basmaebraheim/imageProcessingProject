import fs from "fs";

const checkImageCached = (
    resizedImageName: string
): boolean => {
    const imgUrl = `src/assets/cached-images/${resizedImageName}.jpg`;
    try {
        fs.accessSync(imgUrl, fs.constants.R_OK);
        return true
    } catch (err) {
        return false
    }
}

export default checkImageCached