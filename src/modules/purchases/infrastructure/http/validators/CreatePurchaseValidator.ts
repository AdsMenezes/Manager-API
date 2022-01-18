import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.BODY]: {
    product_id: Joi.string().uuid().required(),
    amount: Joi.number().positive().required(),
  },
})
