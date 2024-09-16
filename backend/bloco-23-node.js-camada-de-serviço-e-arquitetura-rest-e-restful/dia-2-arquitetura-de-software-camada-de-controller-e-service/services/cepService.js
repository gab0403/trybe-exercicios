const cepModel = require('../model/cepModel');
const httpStatus = require('../helpers/httpStatusCodes');

const CEP_REGEX = /^\d{5}-?\d{3}$/;

const findAddressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna um erro
  if (!CEP_REGEX.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
}
// Buscamos o CEP através do Model
const cep = await cepModel.findAddressByCep(searchedCep);

// Caso não encontre nenhum CEP, o service retorna um objeto de erro.
if (!cep) {
  return {
    error: {
      code: httpStatus.NOT_FOUND,
      message: 'CEP não encontrado'
    },
  };
}

// Por fim, retornamos o CEP correto
return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
    // Começamos buscando o cep que estamos tentando cadastrar
    const existingCep = await cepModel.findAddressByCep(cep);
  
    // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
    if (existingCep) {
      return {
        error: {
          code: httpStatus.alreadyExists,
          message: 'CEP já existente',
        },
      };
    }
  
    // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
    return cepModel.create({ cep, logradouro, bairro, localidade, uf });
  };

const getAll = async () => {
    const result = await cepModel.getAll()
    if(!result) return []
    return result
}

module.exports = {getAll, findAddressByCep, create};