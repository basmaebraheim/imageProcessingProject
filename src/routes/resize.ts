
import express, { Request, Response } from "express";
import validation from "../assets/middlewares/validation";
import checkImageCached from "../helpers/check-image-cached";
import createImage from "../helpers/create-image";
const resize = express.Router();

resize.get("/", validation, async (req: Request, res: Response): Promise<void> => {
    const name = req.query.name as string;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    const resizedImageName = name + "(" + width + "x" + height + ")";

    // check if image already exists in cach
    const checkImageCachedResult = await checkImageCached(resizedImageName);
    if (!checkImageCachedResult) {

        // create new resized image and save to cach
        const createImageResult = await createImage(name, width, height, resizedImageName);
        if (!createImageResult)
            res.status(500).send("Internal server error!!");

    }

    // send response
    res.sendFile(`${resizedImageName}.jpg`, {
        root: "src/assets/cached-images",
    })

});

export default resize
