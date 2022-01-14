import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.BODY]: {
    company: Joi.string().min(3).max(20).required(),
    cnpj: Joi.string()
      .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
      .required(),
    category_id: Joi.number().positive().required(),
    representative: Joi.string().min(3).max(20).required(),
    phone: Joi.string()
      .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/)
      .required(),
  },
})
