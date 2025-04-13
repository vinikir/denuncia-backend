
import { Request, Response } from "express";
import { ReturnSucesso, ReturnErroPadrao,ReturnErro, ReturnErroCatch } from "../helpers/helpers"
import { UserInterface } from "../interfaces/Interfaces";
import bcrypt from 'bcrypt'
import UserModel from "../models/userModel"
class UserControlle{

    public async create(req: Request, res: Response) : Promise<object>{
        try{
            
            const {  nome, login, senha, admin }: UserInterface = req.body; 
            
            if(( typeof senha == "undefined" || senha == '' )  ){
                return ReturnErroPadrao( res, 0)
            }

        

            let user:UserInterface = {
                ativo: true,
                nome, 
                login,
                admin
            }
            const hashPassword =  await bcrypt.hash( senha, 8)
           
            user.senha = hashPassword

            let userCreate = await UserModel.salvar(user)
            
            
            userCreate.senha = undefined
        
            return ReturnSucesso(res,userCreate)

        }catch(e){

            return ReturnErroCatch(res, e.message)

        }
    
        

    }

    public async login(req: Request, res: Response):  Promise<Response> {

        try{
            
            const {login, senha} = req.body


            let sucess:Object

            if (typeof login == "undefined" || login == ""){
                return ReturnErroPadrao(res,1)
            }
            

            let userLogin:Array<UserInterface> = await UserModel.findPorLogin(login)
            
            if(!userLogin){
                return ReturnErroPadrao(res,2)
            }
                
            if (userLogin == null) {
                
                return ReturnErroPadrao(res,2)

            }

            if(userLogin.length == 0){
                return ReturnErroPadrao(res,2)
            }

            const usuario:UserInterface = userLogin[0]
            
            let senhaCompare:string = usuario.senha
            
            const passwordVerify = await bcrypt.compare(senha, senhaCompare)
                
            if (senha.length <= 0) {

                return ReturnErroPadrao(res,1)
            
            }

            if (!passwordVerify) {

                return ReturnErroPadrao(res,2)
            
            
            }
               
            sucess = {
                "Nome": `${usuario.nome}`,
                "ID": `${usuario._id}`,
                "admin": `${usuario.admin}`,
            }
            
            return ReturnSucesso(res, sucess)
            
        }catch(e){
            
            return ReturnErroCatch(res, e.message)
        }
    }
}

export default new UserControlle()