import denuncia from "../schemas/denuncia";

class DenunciaModel {

    public async salvar(infos:object){

        try{

            return await denuncia.create(infos)

        }catch(e){

            console.log(e)
            throw new Error(e.message)
        }
        
    }

    public async buscaPorData(dataInicio:Date, dataFim:Date){

        try{

            return await denuncia.find({data:{ $gte: dataInicio, $lte: dataFim }})

        }catch(e){

            console.log(e)
            throw new Error(e.message)
        }
        
    }

}


export default new DenunciaModel()