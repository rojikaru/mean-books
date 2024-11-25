import {Router} from "express";

const bookRouter = Router();

bookRouter.get('/', (req, res) => {
    res.json('Hello from book router');
})

export default bookRouter;
