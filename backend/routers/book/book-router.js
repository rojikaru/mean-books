import {Router} from "express";

const bookRouter = Router();

bookRouter.get('/', (req, res) => {
    res.send('Hello from book router');
})

export default bookRouter;
