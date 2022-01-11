import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import AppError from '@shared/errors/AppError'

import { UserType } from '@modules/users/infrastructure/typeorm/entities/User'

interface ITokenPayload {
  sub: string
  type: UserType
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers

  if (!authorization) {
    throw new AppError('Token missing.', 401)
  }

  const [_, token] = authorization.split(' ')

  try {
    const decoded = verify(token, `${process.env.JWT_SECRET}`) as ITokenPayload
    const { sub: id, type } = decoded as ITokenPayload

    request.user = {
      id,
      type,
    }
  } catch {
    throw new AppError('Invalid token.', 401)
  }

  return next()
}
