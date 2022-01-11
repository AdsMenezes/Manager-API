import { NextFunction, Request, Response } from 'express'
import { isCelebrateError } from 'celebrate'

import AppError from '@shared/errors/AppError'

export default function exeptions(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response {
  if (isCelebrateError(err)) {
    const message = Array.from(err.details, ([method, validation]) => ({
      status: 'Error',
      message: validation.details[0].message,
      key: validation.details[0].context.key,
      method,
    })).shift()

    return response.status(400).json(message)
  }

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: 'Error',
      message: err.message,
    })
  }

  if (err instanceof SyntaxError) {
    return response.status(400).json({
      status: 'Error',
      message: 'Bad request!',
    })
  }

  console.error(err)

  return response.status(500).json({
    error: 'Error',
    message: 'Internal server error.',
  })
}
