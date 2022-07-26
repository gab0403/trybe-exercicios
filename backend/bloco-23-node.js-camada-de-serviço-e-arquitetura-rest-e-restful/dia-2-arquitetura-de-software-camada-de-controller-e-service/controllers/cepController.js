const cepService = require('../services/cepService');
const httpStatus = require('../helpers/httpStatusCodes');
const Joi = require('joi');

const getAll = async (req, res) => {
    try {
      const results = await cepService.getAll();
      if (!results) {
       return res.status(httpStatus.NOT_FOUND).json({ message: 'Não há elementos :(' });
     }
      res.status(httpStatus.OK).json(results, {message: 'pong!'});
    } catch (err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
    }
};

const findAddressByCep = async (req, res, next) => {
  const { cep } = req.params;

  const address = await cepService.findAddressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(httpStatus.OK).json(address);
};

const create = async (req, res, next) => {
  // Armazenamos essa parte do schema do Joi para reutilizá-la
  const requiredNonEmptyString = Joi.string().not().empty().required();

  // Validamos o corpo da request
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  // Caso haja erro de validação, iniciamos o fluxo de erro
  if (error) return next(error);

  // Caso não haja erro de validação, pedimos para o service criar o cep
  const newCep = await cepService.create(req.body);

  // Caso o service nos retorne um erro
  if (newCep.error) {
    // Iniciamos o fluxo de erro
    return next(newCep.error);
  }

  // Caso contrário, retornamos o status `201 Created`, e o novo CEP, em formato JSON
  res.status(httpStatus.OK).json(newCep);
};

module.exports = {getAll, findAddressByCep, create}