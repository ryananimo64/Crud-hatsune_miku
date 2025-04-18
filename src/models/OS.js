/**
 * Modelo de dados para construção das coleções("tabelas")
 * Clientes
 */

//importação dos recursos do framework mongoose
const {model , Schema} = require('mongoose')
const { type } = require('os')

// criação da estrutura da coleção clientes
const OSchema = new Schema({
    nomeOS: {type:String},
    tecidoOS: {type:String},
    problemaOS: {type:String},
    costureiraOS: {type:String}

},//não versiona os dados armazenado
{versionKey:false})

// exporta para o main o modelo de dados
//Obs: Clientes será o nome da coleção
module.exports = model('OS',OSchema)