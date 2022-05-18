import sharp from "sharp";

const createImage = async (
    name: string,
    width: number,
    height: number,
    resizedImageName: string
): Promise<boolean> => {
      
    try {
        await sharp(`src/assets/images/${name}.jpg`)
            .resize(width, height, { fit: "contain" })
            .toFile(`src/assets/cached-images/${resizedImageName}.jpg`);
        return true;
    } catch (err) {
        console.error("createImageerror", err)
        return false;
    }

}



export default createImage
