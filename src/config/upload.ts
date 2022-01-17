import multer from 'multer'
import crypto from 'crypto'
import path from 'path'

import AppError from '@shared/errors/AppError'

const temporaryFolder = path.resolve(__dirname, '..', '..', 'tmp')
const mimetypeAllowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

export default {
  temporaryFolder,
  uploadFolder: path.resolve(temporaryFolder, 'uploads'),
  storage: multer.diskStorage({
    destination: temporaryFolder,

    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    },
  }),
  limits: {
    fieldNameSize: 5,
    fileSize: 1 * 1024 * 1024, // 1MB
  },
  fileFilter: (
    request,
    file: Express.Multer.File,
    callback: (error: AppError | null, filename: boolean) => void
  ) => {
    if (!mimetypeAllowed.includes(file.mimetype)) {
      return callback(new AppError('File is not allowed.'), false)
    }

    callback(null, true)
  },
}
