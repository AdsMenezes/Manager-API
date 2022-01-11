import { NextFunction, Request, Response } from 'express'

import AppError from '@shared/errors/AppError'

import { UserType } from '@modules/users/infrastructure/typeorm/entities/User'

export default function ensureAdministrator(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const userType = request.user.type

  if (userType !== UserType.ADMINISTRATOR) {
    throw new AppError('Unauthorized.', 401)
  }

  return next()
}
