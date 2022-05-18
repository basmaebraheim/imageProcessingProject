
import express, { Request, Response } from "express";
const resize = express.Router();

resize.get("/", (req: Request, res: Response) => {
    res.send("start image resizing!")
});

export default resize
