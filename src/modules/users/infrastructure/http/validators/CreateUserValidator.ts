import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().max(40).required().lowercase(),
    password: Joi.string().min(3).max(20).required(),
    phone: Joi.string()
      .regex(/^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/)
      .required(),
    type: Joi.string().valid('administrator', 'operator').required(),
  },
})
