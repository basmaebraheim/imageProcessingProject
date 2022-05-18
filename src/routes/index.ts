import express, { Request, Response } from "express";
const routes = express.Router();
import resize from "./resize";

routes.get("/", (req: Request, res: Response) => {
    res.send("Initialize image processing!")
});

routes.use("/resize", resize);

export default routes;