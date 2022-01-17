import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.BODY]: {
    title: Joi.string().min(3).max(20).required(),
    description: Joi.string().min(3).max(500).required(),
    cost: Joi.number().positive().required(),
    price: Joi.number().positive().required(),
    amount: Joi.number().positive().required(),
    provider_id: Joi.string().uuid().required(),
  },
})
