import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().max(40).required(),
    password: Joi.string().min(3).max(20).required(),
  },
})
