import { CastError } from 'mongoose';

const badRequestErrors = [TypeError, RangeError, ReferenceError, URIError, CastError];

export default function handleError(err, req, res, next) {
    if (err instanceof SyntaxError) {
        res.status(400).send({
            message: 'Invalid JSON',
            status: 400,
        });
        return;
    }

    if (badRequestErrors.some((error) => err instanceof error)) {
        res.status(400).send({
            message: 'Invalid request',
            status: 400,
        });
        return;
    }

    console.error(err);
    res.status(500).send({
        message: err.message ?? 'Internal server error',
        status: 500,
    });
}
