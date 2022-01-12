import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(3).max(15).required(),
  },
})
