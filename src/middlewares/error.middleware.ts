import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  req.log.error({
    message: err.message,
    stack: err.stack,
  });

  res.status(500).send({
    errors: [{ message: err.message }],
  });
};
