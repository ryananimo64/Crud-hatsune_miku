/**
 * Processo Principal
 * Estudo do banco de dados MongoDB(CRUD)
 * @author Ryan Rodrigues Andrade
 */

//importação do modulo de conexão
const {conectar, desconectar} = require('./database.js')
//impotação do modelo de dados
const OSModel = require('./src/models/OS.js')

const salvarOS = async (nomeDaOS,tecidoDaOS,problemaDaOS,serviçoDaOS) => {
    try {
        const novaOS = new OSModel({
            nomeOS:nomeDaOS,
            tecidoOS:tecidoDaOS,
            problemaOS:problemaDaOS,
            serviçoOS:serviçoDaOS
        })
        await novaOS.save()
        console.log("A Ordem de serviço foi gerada com sucesso")
    } catch (error) {
        console.log(error)
    }
}

// listar clientes
//.sort({nomeCliente:1}) listar em ordem alfabetica
/*const listarClientes = async () =>{
    try {
        const clientes = await clienteModel.find().sort({nomeCliente:1})
        console.log(clientes)
    } catch (error) {
        console.log(error)
    }
}
*/
// Função para buscar cliente pelo nome 
//find(
//{nomeCliente: new RegExp(nome, 'i')} ignora na busca letra minuscula ou maiuculas(i - case insensitive)
//)
const buscarNomeOS = async (nome) => {
    try {
        const OSNome = await OSModel.find({nomeOS: new RegExp(nome, 'i')})
        console.log(OSNome)
    } catch (error) {
        console.log(error)
    }
}

const buscarNumeroOS = async (numerodaOS) => {
    try {
        const OSnumero = await OSModel.find({nomeOS: new RegExp(numerodaOS)})
        console.log(OSnumero)
    } catch (error) {
        console.log(error)
    }
}

// Função para buscar o cpf
/*const buscarCpfCliente = async (cpf) => {
    try {
        const clienteCpf = await clienteModel.find({cpfCliente: new RegExp(cpf)})
        console.log(clienteCpf)
    } catch (error) {
        console.log(error)
    }
}
*/
// Função para editar os dados do cliente
//Atenção!! Usar o id do Cliente
/*const atualizarCliente = async (id, nomeCli, foneCli, cpfCli) => {
    try {
        const clienteEditado = await clienteModel.findByIdAndUpdate(id,{
            nomeCliente:nomeCli,foneCliente:foneCli,cpfCliente:cpfCli
        },{
            new:true,runValidators:true
        })
        console.log("dados do clientes alterados com sucesso")
    } catch (error) {
        if(error.code = 11000){
            console.log(`Erro: o CPF: ${cpfCli} já está cadastrado`)
         }else{
            console.log(error)
         }
    }
}
*/
// Função para excluir cliente
/*const excluirCliente = async (id) => {
    try {
        const clienteDeletado = await clienteModel.findByIdAndDelete(id)
        console.log("Cliente Excluido com sucesso")
    } catch (error) {
        console.log(error)
    }
}
*/
//=============================================================================
const iniciarSistema = async ()  => {
    console.clear
    console.log("Estudo do MongoDB")
    console.log("-----------------------------------------")
    await conectar()
    //CRUD Create (inserção no banco de dados)
    //await salvarOS("Pedrinho","Couro","Quero uma fantasia de açogueiro com poucos detalhes","eu gostaria que o fulano faça a fantasia")
    
    //CRUD Read (Buscar cliente nome)
    await buscarNomeOS("pedrinho")

    //CRUD Read (Buscar cliente cpf)
    //await buscarCpfCliente("846382626")
    
    //CRUD Read (Listar todos os clientes)
    //await listarClientes()

    //CRUD Update (atualiza os dados clientes)
    //await atualizarCliente("67d88165471dee1ec3192495","YE","(11)99123456" ,"539988761")

    //CRUD DELETE (apaga os dados do cliente)
    //await excluirCliente("67d88165471dee1ec3192495")

    await desconectar()
}

iniciarSistema()