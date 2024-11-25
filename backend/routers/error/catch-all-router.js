import {Router} from "express";

const catchAllRouter = Router();

catchAllRouter.all('*', (req, res) => {
    res.status(404).json({
        message: 'Resource not found',
        status: 404,
        method: req.method,
        url: req.url,
    });
})

export default catchAllRouter;
