import denunciaModel from "../models/denunciaModel"
import { ReturnSucesso, ReturnErroPadrao,ReturnErro, ReturnErroCatch } from "../helpers/helpers"

class DenunciaControlle{

    public async create(req: any, res: any){
        try{

            let v = {
                lida: false,
                msg: req.body.msg,
                titulo: req.body.titulo,
                data: new Date(),
            }
            
            const res_salvarDenuncia = await denunciaModel.salvar(v)

            return ReturnSucesso(res, res_salvarDenuncia)

        }catch(e){

            return ReturnErroCatch(res, e.message)

        }
    }
    public async buscaPorData(req: any, res: any){

        try{

            const {dataInicio, dataFim} = req.body

            const res_salvarDenuncia = await denunciaModel.buscaPorData(dataInicio, dataFim)


            return ReturnSucesso(res, res_salvarDenuncia)

        }catch(e){

            return ReturnErroCatch(res, e.message)
            
        }
    }

}
export default new DenunciaControlle()